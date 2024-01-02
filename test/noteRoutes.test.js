const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index'); 
const Note = require('../model/noteModel');
const {connectDb} = require("../config/database")



describe('Note Routes', () => {

    before(async () => {
        connectDb(); 
    });

    after(async () => {
        await mongoose.connection.close();
    });
    beforeEach(async function () {
        this.timeout(10000); 
        await Note.deleteMany();
    });
    it('should create a new note', async () => {
        const noteData = { title: 'Test Note', content: 'This is a test note.' };
        const { expect } = await import('chai');

        const res = await request(app)
            .post('/api/notes')
            .send(noteData)
            .expect(201);

        expect(res.body.title).to.equal(noteData.title);
        expect(res.body.content).to.equal(noteData.content);
    });

    it('should retrieve all notes', async () => {
        const note1 = { title: 'Note 1', content: 'Content 1' };
        const note2 = { title: 'Note 2', content: 'Content 2' };
        const { expect } = await import('chai');

        await Note.create(note1);
        await Note.create(note2);

        const res = await request(app)
            .get('/api/notes')
            .expect(200);

        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(2);
    });

});
