/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable n/handle-callback-err */
/* eslint-disable no-undef */
import app from '../full_server/server.js';
import { use, request, expect } from 'chai';
import chaiHttp from 'chai-http';
process.argv[2] = './database.csv';

use(chaiHttp);

describe('Server!', () => {
  it('welcomes user to the api', (done) => {
    request(app)
      .get('/students/CS')
      .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equals(
              'List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie'
          );
          done();
      });
  });
})
