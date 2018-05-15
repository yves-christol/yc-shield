import firebase from 'firebase';

function logout() {
  firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
  });
}

export default logout;
