const firebaseConfig = {
  apiKey: "AIzaSyDlOJqBgd-8KqUT-Y94lsma5W8T79PsPjM",
  authDomain: "trifusion-cotizador.firebaseapp.com",
  projectId: "trifusion-cotizador"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
