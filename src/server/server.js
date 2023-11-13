// const path = require('path');
import path from 'path';
// const express = require('express');
import express from 'express';

const app = express(),
	DIST_DIR = __dirname,
	HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('*', (req,res) => {
	res.sendFile(HTML_FILE)
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`App is listening on PORT: ${PORT}...`);
	console.log('Press Ctrl+C to quit.');
});