const request = require("supertest");
const express = require("express");
const app = require("../index"); // adapter selon ton export

describe("GET /tasks", () => {
  it("doit retourner un tableau", async () => {
	      const res = await request(app).get('/tasks');
     expect(res.statusCode).toBe(200);           // Vérifie le code HTTP
    expect(Array.isArray(res.body)).toBe(true); // ✅ test passe  
	});
});
