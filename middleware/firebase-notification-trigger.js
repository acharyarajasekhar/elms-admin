'use strict';
var admin = require('firebase-admin');
var store = admin.firestore();

module.exports.notifyManager =(req, res) => {

    let leave = req.Leave;

    let notification = {
        leaveId: req.query.leaveId,
        targetUserID: leave.Owner.Manager.Email,
        sourceUserID: leave.Owner.Email
    }

    console.log(notification);

    store.collection('eNotifications').doc(notification.targetUserID)
        .collection('notifications').add(notification).then(result => {
            console.log('notification');
            console.log(result);
          }).catch(err => { console.log(err); });

}

module.exports.notifyEmployee =(req, res) => {

    let leave = req.Leave;

    let notification = {
        leaveId: req.query.leaveId,
        targetUserID: leave.Owner.Email,
        sourceUserID: leave.Owner.Manager.Email
    }

    console.log(notification);

    store.collection('eNotifications').doc(notification.targetUserID)
        .collection('notifications').add(notification).then(result => {
            console.log('notification');
            console.log(result);
          }).catch(err => { console.log(err); });
    
}