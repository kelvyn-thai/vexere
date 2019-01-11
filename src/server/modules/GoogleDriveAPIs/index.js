const { google } = require('googleapis');
class GoogleDriveApis {

    constructor() {
        const oAuth2Client = new google.auth.OAuth2(
            "874595812213-44h4eljqhslgd4ddiudrchjd5a439lia.apps.googleusercontent.com",
            "ZvIt9v6oGiX-AwFtqOOM_wdQ",
            "urn:ietf:wg:oauth:2.0:oob");
        const token = {
            access_token: "ya29.GltkBuEZsWwCjI3SQXPcoQu67u0UFjkw4w6ksW3BtdvqOO-yaraBvvEX9PWnXHdNAL-myn4knw19M5yk52sk_NRMh_pP9-mIyZr0HMApD4CjmxyeH0b2pcscezNT",
            refresh_token: "1/WO62lUTmP7GNEasfNhyo4B4bC7z8M8Gg45VqiOPhgHR_8oxTNqWCoeoT89aX0dS6",
            scope: "https://www.googleapis.com/auth/drive",
            token_type: "Bearer",
            expiry_date: 1543565996648
        }
        oAuth2Client.setCredentials(token)
        this.drive = google.drive({
            version: 'v3',
            auth: oAuth2Client
        })
    }

    uploadFile(data={}){return new Promise((resolve, reject) => this.drive.files.create(data, (err, file) => err ? reject(err) : resolve(file.data)))}

    changePermission(data={}){return new Promise((resolve, reject) => this.drive.permissions.create(data, (err) => err ? reject(err) : resolve({status: 1})))}
    

    static getGoogleDriveApis() {
        return new GoogleDriveApis();
    }
}

module.exports = GoogleDriveApis.getGoogleDriveApis();