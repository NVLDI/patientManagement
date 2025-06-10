import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import {
  fetchAuthSession,
  getCurrentUser,
  signOut
} from 'aws-amplify/auth';
import {
  createClinic,
  deleteClinic,
  updateClinic,
  createClinicInfrastructure 
} from '../graphql/mutations.js';
import { listClinics } from '../graphql/queries.js';
import type { GraphQLResult } from '@aws-amplify/api';

const client = generateClient();

type Clinic = {
  id: string;
  name: string;
  email: string;
};

type ListClinicsData = {
  listClinics: {
    items: Clinic[];
  };
};

export default function SuperDashboard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [adminEmail, setAdminEmail] = useState('');

  const fetchClinics = async () => {
    try {
      const result = await client.graphql<GraphQLResult<ListClinicsData>>({
      query: listClinics,
      authMode: 'userPool', // ✅ this is the correct value in v6
      });

      if ('data' in result && result.data?.listClinics?.items) {
        setClinics(result.data.listClinics.items);
      }
    } catch (err: any) {
      if (err.errors) console.error('GraphQL Errors (listClinics):', err.errors);
      console.error('Error fetching clinics:', err);
    }
  };

  useEffect(() => {
    fetchClinics();
  }, []);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const user = await getCurrentUser();
        const session = await fetchAuthSession();
        const idToken = session.tokens?.idToken;

        if (idToken) {
          const payload = idToken.payload;
          console.log('✅ Logged in as:', payload['cognito:username']);
          console.log('📧 Email:', payload['email']);
          console.log('👥 Cognito groups:', payload['cognito:groups']);
          setAdminEmail(payload['email'] as string);
        }
      } catch (err: any) {
        if (err.name === 'UserUnAuthenticatedException') {
          console.warn('User is not logged in — redirecting to login.');
          window.location.href = '/SuperLogin'; // 🔁 Your login route
        } else {
          console.error('❌ Failed to fetch session:', err);
        }
      }
    };

    loadSession();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      window.location.href = '/SuperLogin'; // 🔁 Redirect to login after logout
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

 const createClinicHandler = async () => {
  try {
    const result = await client.graphql({
      query: createClinic,
      variables: { input: { name, email } },
      authMode: 'userPool',
    });

    if ('data' in result && result.data?.createClinic) {
      alert('✅ Clinic added to main DB');

      const lambdaResult = await client.graphql({
        query: createClinicInfrastructure,
        variables: { input: { name, email } },
        authMode: 'userPool',
      });

    if ('data' in lambdaResult && lambdaResult.data?.createClinicInfrastructure) {
        alert('✅ Clinic infrastructure created successfully');
      } else {
        console.error('❌ Failed to create clinic infrastructure:', lambdaResult);
        alert('Failed to create clinic infrastructure');
      } 

      setName('');
      setEmail('');
      fetchClinics();
    }
  } catch (err: any) {
    console.error('❌ Error in createClinicHandler:', err);
    alert('Failed to create clinic infrastructure');
  }
};



  const deleteClinicHandler = async (id: string) => {
    try {
      const result = await client.graphql({
        query: deleteClinic,
        variables: { input: { id } },
        authMode: 'userPool',
      });

      if ('data' in result && result.data?.deleteClinic) {
        alert('Clinic deleted!');
        fetchClinics();
      }
    } catch (err) {
      console.error('Error deleting clinic:', err);
      alert('Failed to delete clinic');
    }
  };

  const startEditing = (clinic: Clinic) => {
    setEditingId(clinic.id);
    setEditName(clinic.name);
    setEditEmail(clinic.email);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditName('');
    setEditEmail('');
  };

  const updateClinicHandler = async () => {
    if (!editingId) return;
    try {
      const result = await client.graphql({
        query: updateClinic,
        authMode: 'userPool',
        variables: {
          input: {
            id: editingId,
            name: editName,
            email: editEmail,
          },
        },
      });

      if ('data' in result && result.data?.updateClinic) {
        alert('Clinic updated!');
        setEditingId(null);
        fetchClinics();
      }
    } catch (err) {
      console.error('Error updating clinic:', err);
      alert('Failed to update clinic');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px'
      }}>
        <h2>Super Admin Dashboard</h2>
        <div>
          <span style={{ marginRight: 20 }}>👤 {adminEmail}</span>
          <button onClick={handleLogout} style={{
            padding: '6px 12px',
            borderRadius: '5px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}>Logout</button>
        </div>
      </div>

      {/* Clinic Registration */}
      <div style={{ marginTop: 30 }}>
        <h3>Register New Clinic</h3>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Clinic Name"
          style={{ marginRight: 10, padding: 5 }}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Contact Email"
          style={{ marginRight: 10, padding: 5 }}
        />
        <button onClick={createClinicHandler} style={{
          padding: '6px 12px',
          borderRadius: '5px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none'
        }}>Create Clinic</button>
      </div>

      {/* Clinic List */}
      <div style={{ marginTop: 30 }}>
        <h3>Registered Clinics</h3>
        <ul>
          {clinics.map((clinic) => (
            <li key={clinic.id} style={{ marginBottom: 10 }}>
              {editingId === clinic.id ? (
                <>
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    style={{ marginRight: 10, padding: 5 }}
                  />
                  <input
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    style={{ marginRight: 10, padding: 5 }}
                  />
                  <button onClick={updateClinicHandler}>Save</button>
                  <button onClick={cancelEditing} style={{ marginLeft: 5 }}>Cancel</button>
                </>
              ) : (
                <>
                  <strong>{clinic.name}</strong> ({clinic.email})
                  <button onClick={() => startEditing(clinic)} style={{ marginLeft: 10 }}>Edit</button>
                  <button onClick={() => deleteClinicHandler(clinic.id)} style={{ marginLeft: 5 }}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
