import { Pool } from 'pg';
import dotenv from 'dotenv';
import queryUser from './queries/user';
import queryParty from './queries/party';
import queryOffice from './queries/office';
import queryCand from './queries/candReg';
import queryVote from './queries/vote';


dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
pool.on('connect', () => {
  console.log('connected to the db');
});

const createTableUsers = async () => {
  const queryText = queryUser.createTableUsers;
  await pool.query(queryText)
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};
const createTableParty = async () => {
  const queryText = queryParty.createTableParties;
  await pool.query(queryText)
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};
const createTableOffice = async () => {
  const queryText = queryOffice.createTableOffices;
  await pool.query(queryText)
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};
const createTableCandidate = async () => {
  const queryText = queryCand.createCandidates;
  await pool.query(queryText)
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};
const createTableVote = async () => {
  const queryText = queryVote.createVote;
  await pool.query(queryText)
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};


(async () => {
  await createTableUsers();
  await createTableParty();
  await createTableOffice();
  await createTableCandidate();
  await createTableVote();
  pool.end();
  console.log('Tables has been created');
})().catch((err) => {
  console.log(err);
});
