import firebase from 'firebase'
// Required for side-effects
import 'firebase/firestore';
//import array here
const data: Array<Elements> = require('./periodicTable.json'); 

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "<YOUR API KEY>",
    authDomain: "<YOUR AUTH DOMAIN>",
    projectId: "<YOUR PROJECT ID>"
  });
  
let db = firebase.firestore();

data.forEach(function(elementsArray: Elements) {
    //add collection name
    db.collection('pt').add({
        //add schema
        id: elementsArray.AtomicNumber,
        element: elementsArray.Element,
        atomicMass: elementsArray.AtomicMass,
        neutrons: elementsArray.NumberofNeutrons,
        protons: elementsArray.NumberofProtons,
        electrons: elementsArray.NumberofElectrons,
        period: elementsArray.Period,
        group: elementsArray.Group,
        phase: elementsArray.Phase,
        radioactive: elementsArray.Radioactive,
        natural: elementsArray.Natural,
        metal: elementsArray.Metal,
        nonmental: elementsArray.Nonmetal,
        metalloid: elementsArray.Metalloid,
        type: elementsArray.Type,
        atomicRadius: elementsArray.AtomicRadius,
        electronegativity: elementsArray.Electronegativity,
        firstIonization: elementsArray.FirstIonization,
        density: elementsArray.Density,
        meltingPoint: elementsArray.MeltingPoint,
        boilingPoint: elementsArray.BoilingPoint,
        isotopes: elementsArray.NumberOfIsotopes,
        discoverer: elementsArray.Discoverer,
        year: elementsArray.Year,
        specificHeat: elementsArray.SpecificHeat,
        shells: elementsArray.NumberofShells,
        valence: elementsArray.NumberofValence
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

interface Elements {
    AtomicNumber: Number,
    Element: String,
    Symbol: String,
    AtomicMass: Number,
    NumberofNeutrons: Number,
    NumberofProtons: Number,
    NumberofElectrons: Number,
    Period: Number,
    Group: Number,
    Phase: String,
    Radioactive: Boolean,
    Natural: Boolean,
    Metal: Boolean,
    Nonmetal: Boolean,
    Metalloid: Boolean,
    Type: String,
    AtomicRadius: Number,
    Electronegativity: Number,
    FirstIonization: Number,
    Density: String,
    MeltingPoint: Number,
    BoilingPoint: Number,
    NumberOfIsotopes: Number,
    Discoverer: String,
    Year: Number,
    SpecificHeat: Number,
    NumberofShells: Number,
    NumberofValence: Number,
  }