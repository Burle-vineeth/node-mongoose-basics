const async = require('hbs/lib/async');
const mongoose = require('mongoose');

const validator = require('validator');

mongoose.connect('mongodb://localhost:27017//ttchanel', { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {
    console.log('connection is successful...');
})
.catch( (err) => {
    console.log(err);
})

// For creating the data in the document

const playlistSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos : {
        type : Number,
        validate(value) {
            if(value < 0) {
                throw new Error("Viedos count should not be negative");
            }
        }
    },
    email : {
        type : String, 
        required : true,
        unique : true, 
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is inValid");
            }
        }
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

const Playlist = new mongoose.model( "Playlist", playlistSchema);

const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist( {
            name: "React",
            ctype: "Front End",
            videos: 80,
            active: true,
        });
        const reactPlaylist2 = new Playlist( {
            name: "React",
            ctype: "Front End",
            videos: 80,
            active: true,
        });
        const reactPlaylist3 = new Playlist( {
            name: "React",
            ctype: "Front End",
            videos: 80,
            active: true,
        });
        const reactPlaylist4 = new Playlist( {
            name: "React",
            ctype: "Front End",
            videos: 80,
            active: true,
        });
        const reactPlaylist5 = new Playlist( {
            name: "React",
            ctype: "Front End",
            videos: 80,
            active: true,
        });
        const result = await Playlist.insertMany( [reactPlaylist, reactPlaylist2, reactPlaylist3, reactPlaylist4, reactPlaylist5] );
        console.log(result); 
    } catch (err) { 
        console.log(err);
    }
}

createDocument();

// reading the data from the database

// const getDocument = async () => {
//     try {
//         const result = await Playlist.find( {ctype : 'Front End'})
//         .select( {name : 1})
//         .limit(1);
//         console.log(result);
//     } catch(err) {
//         console.log(err);
//     }
// }

// const getDocument = async () => {
//     try {
//         const result = await Playlist.find( { $or : [{active : true}, { ctype : 'Front End'}]})
//         console.log(result);
//     } catch(err) {
//         console.log(err);
//     }
// }

// Number of Documents

// const getDocument = async () => {
//     try {
//         const result = await Playlist
//         .find( { $or : [{active : true}, { ctype : 'Front End'}]})
//         .countDocuments();
//         console.log(result); // prints the Number of documents it returns
//     } catch(err) {
//         console.log(err);
//     }
// }

// Sorting the Documents

// const getDocument = async () => {
//     try {
//         const result = await Playlist
//         .find( { $or : [{active : true}, { ctype : 'Front End'}]})
//         .sort( { name : 1});  // Sorts in ascending Order
//         // .sort( { name : -1});  Sorts in descending Order
//         console.log(result); // prints the Number of documents it returns
//     } catch(err) {
//         console.log(err);
//     }
// }

// getDocument();

// const updateDocument = async (_id) => {
//     try {
//         // const result = await Playlist.updateOne( {_id}, {
//         //     $set : {
//         //         name : "Javascript"
//         //     }
//         // });

//         // OR

//         const result = await Playlist.findByIdAndUpdate( {_id}, {
//             $set : {
//                 name : "Javascript"
//             }
//         }, {
//             new : true, // By this we get the new modified data OTHERWISE we get the old (OR) previous data
//             useFindAndModify : false,
//         })

//         console.log(result);
//     } catch(err) {
//         console.log('err');
//     }
// }

// updateDocument("aslfdjoweu9uqwerwq98789");

const deleteDocument = async (_id) => {
    try {
        // const result = await Playlist.deleteOne( {_id} );

        // OR 

        const result = await Playlist.findByIdDelete( {_id}); // It Returns the deleted data as well 
        
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}


deleteDocument("afalskjfdf879s968");