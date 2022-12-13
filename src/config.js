import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// export const initAnalytics = (firebaseConfig) => {
//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);

//     // Initialize Analytics and get a reference to the service
//     const analytics = getAnalytics(app);

//     return analytics;
// }

// export const EventLog = (analytics, eventName, properties) => {
//     logEvent(analytics, eventName, properties);
// }

// export const GameLog = (analytics, eventName, properties) => {
//     logEvent(analytics, `GAME-${eventName}`, {
//         gameId: properties.gameId,
//         offerId: properties.offerId,
//         sessionId: properties.sessionId,
//         duration: properties.duration,
//         claims: properties.claims,
//         platform: properties.platform,
//         device: properties.device,
//         customData: properties.customData,
//         ...properties
//     });
// }

export default class ScutiAnalytics {

    constructor(environment) {

        let firebaseConfig
        if (environment == 'production') {
            firebaseConfig = {
                apiKey: "AIzaSyCBo_3Q7EDTZMSp0LBrZQ9gipbPLXSxJBY",
                authDomain: "prod-xpf1.firebaseapp.com",
                projectId: "prod-xpf1",
                storageBucket: "prod-xpf1.appspot.com",
                messagingSenderId: "838293689075",
                appId: "1:838293689075:web:aa203391ea2e64aa295d86",
                measurementId: "G-BV7E8PBG4G"
            };
        } else if (environment == 'staging') {
            firebaseConfig = {
                apiKey: "AIzaSyDPZQyi8s1OFpWBA0JwCnACA_XajF-DKmc",
                authDomain: "xpf1-ec213.firebaseapp.com",
                projectId: "xpf1-ec213",
                storageBucket: "xpf1-ec213.appspot.com",
                messagingSenderId: "381735665169",
                appId: "1:381735665169:web:c4a2bdbab56a23c0643bb0",
                measurementId: "G-5X51G25D6G"
            };
        }

        const app = initializeApp(firebaseConfig);

        // Initialize Analytics and get a reference to the service
        this.analytics = getAnalytics(app);
        this.firebaseConfig = firebaseConfig
    }

    gameLog(eventName, properties) {
        logEvent(this.analytics, `GAME-${eventName}`, {
            ...properties
        });
    }
}


