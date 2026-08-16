<!-- Firebase App -->
<script type="module">
    import { initializeApp }
    from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    onValue,
    serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.17.1/firebase-database.js";


    // Firebase Console se mila hua config yahan paste karo

    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT.firebaseapp.com",
        databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
        projectId: "YOUR_PROJECT",
        storageBucket: "YOUR_PROJECT.firebasestorage.app",
        messagingSenderId: "YOUR_SENDER_ID",
        appId: "YOUR_APP_ID"
    };


    // Initialize Firebase

    const app =
        initializeApp(firebaseConfig);


    // Initialize Realtime Database

    const db =
        getDatabase(app);


    // Global access
    window.firebaseDB = db;
</script>