# Firebase Setup Instructions

This guide will help you set up Firebase Firestore for the contact form on your resume website.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project

## Step 2: Enable Firestore Database

1. In your Firebase project, click on "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development) or "Start in production mode" (for production)
4. Select a Cloud Firestore location (choose one closest to your users)
5. Click "Enable"

## Step 3: Get Your Firebase Configuration

1. In your Firebase project, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (`</>`) to add a web app
5. Register your app with a nickname (e.g., "Resume Website")
6. Copy the `firebaseConfig` object

## Step 4: Update Your Website

Open `index.html` and replace the Firebase configuration (around line 863-870):

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

Replace with your actual config values from Step 3.

## Step 5: Set Up Firestore Security Rules

In the Firebase Console, go to Firestore Database → Rules and update the rules:

### For Development (Test Mode):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{message} {
      allow read: if request.auth != null; // Only authenticated users can read
      allow write: if true; // Anyone can submit messages
    }
  }
}
```

### For Production (Recommended):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{message} {
      allow read: if request.auth != null; // Only you can read messages
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'subject', 'message', 'timestamp'])
                    && request.resource.data.name is string
                    && request.resource.data.email is string
                    && request.resource.data.subject is string
                    && request.resource.data.message is string
                    && request.resource.data.email.matches('.*@.*\\..*'); // Basic email validation
    }
  }
}
```

## Step 6: Test Your Contact Form

1. Start your local server: `python3 -m http.server 8080`
2. Open your website in a browser
3. Navigate to the "Let's Work Together" section
4. Fill out and submit the contact form
5. Check your Firestore Console to see if the message was saved

## Data Structure

Messages are stored in Firestore with the following structure:

```
Collection: messages
Document ID: Auto-generated
Fields:
  - name (string): Sender's name
  - email (string): Sender's email
  - subject (string): Message subject
  - message (string): Message content
  - timestamp (timestamp): When the message was sent
  - read (boolean): Whether you've read the message (default: false)
```

## Viewing Messages

To view messages sent through your contact form:

1. Go to Firebase Console
2. Click on "Firestore Database"
3. Navigate to the `messages` collection
4. Click on any document to view its details

## Optional: Set Up Email Notifications

You can set up Firebase Cloud Functions to send you an email whenever someone submits the contact form:

1. Enable Firebase Cloud Functions
2. Create a function that triggers on new document creation in the `messages` collection
3. Use a service like SendGrid or Nodemailer to send emails

## Troubleshooting

- **Messages not saving**: Check browser console for errors and verify your Firebase config
- **Permission denied**: Update your Firestore security rules
- **Form not submitting**: Make sure Firebase SDK is loaded (check Network tab in browser dev tools)

## Security Best Practices

1. **Never commit your Firebase config to public repositories** if it contains sensitive data
2. Use environment variables for production deployments
3. Set up proper Firestore security rules
4. Enable App Check to prevent abuse
5. Monitor your Firebase usage in the Console

## Cost Considerations

Firebase offers a generous free tier:
- Firestore: 1GB storage, 50K reads/day, 20K writes/day
- This should be more than enough for a personal portfolio contact form

Monitor your usage in the Firebase Console under "Usage and billing"
