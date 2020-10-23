const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
//import array here
const data = require('./periodicTable.json'); 

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "<YOUR API KEY>",
    authDomain: "<YOUR AUTH DOMAIN>",
    projectId: "<YOUR PROJECT ID>"
  });
  
var db = firebase.firestore();

data.forEach(function(obj) {
    //add collection name
    db.collection('pt').add({
        //add schema
        id: obj.AtomicNumber,
        element: obj.Element,
        atomicMass: obj.AtomicMass,
        neutrons: obj.NumberofNeutrons,
        protons: obj.NumberofProtons,
        electrons: obj.NumberofElectrons,
        period: obj.Period,
        group: obj.Group,
        phase: obj.Phase,
        radioactive: obj.Radioactive,
        natural: obj.Natural,
        metal: obj.Metal,
        nonmental: obj.Nonmetal,
        metalloid: obj.Metalloid,
        type: obj.Type,
        atomicRadius: obj.AtomicRadius,
        electronegativity: obj.Electronegativity,
        firstIonization: obj.FirstIonization,
        density: obj.Density,
        meltingPoint: obj.MeltingPoint,
        boilingPoint: obj.BoilingPoint,
        isotopes: obj.NumberOfIsotopes,
        discoverer: obj.Discoverer,
        year: obj.Year,
        specificHeat: obj.SpecificHeat,
        shells: obj.NumberofShells,
        valence: obj.NumberofValence
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});