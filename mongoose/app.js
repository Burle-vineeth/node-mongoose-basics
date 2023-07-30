const async = require('hbs/lib/async');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017//ttchanel', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('success');
    })
    .catch((err) => {
        console.log(err);
    })

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

const Playlist = new mongoose.model("Playlist", playlistSchema);

//create document or insert

const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "React",
            ctype: "Front End",
            videos: 80,
            active: true,
        })
        const result = await reactPlaylist.save();
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
}

createDocument();