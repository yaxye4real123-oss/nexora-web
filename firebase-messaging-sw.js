importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
        apiKey: "AIzaSyBgDwtgtDk0HpL5sbglOgDDn8iG1ud6RxU",
  authDomain: "nexora-dc728.firebaseapp.com",
  projectId: "nexora-dc728",
  storageBucket: "nexora-dc728.firebasestorage.app",
  messagingSenderId: "148224232398",
    appId: "1:148224232398:web:753ed535094fa850a4b99f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});
