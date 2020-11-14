import { MagnetManager } from './magnetManager';
import { BoardManager } from './boardManager';
import { UserManager } from './UserManager';
import { Discussion } from './Discussion';
import { Menu } from './Menu';
import { Drawing } from './Drawing';

/**
 * this class contains the events that are shared with other users connected to the same tableaunoir
 * */

export class ShareEvent {
    static mousedown(userId, evt) {
        UserManager.users[userId].mousedown(evt);
    }

    static mousemove(userId, evt) {
        if (UserManager.users[userId] == undefined)
            console.log("why is " + userId + " not declared?");
        UserManager.users[userId].mousemove(evt);
    }

    static mouseup(userId, evt) {
        UserManager.users[userId].mouseup(evt);
    }

    static setCurrentColor(userId, color) {
        UserManager.users[userId].setCurrentColor(color);
    }

    static switchErase(userId) {
        UserManager.users[userId].switchErase();
    }

    static switchChalk(userId) {
        UserManager.users[userId].switchChalk();
    }

    static setUserCanWrite(userId, bool) {
        UserManager.users[userId].setCanWrite(bool);
    }

    static magnetMove(idMagnet, x, y) {
        x = parseInt(x);
        y = parseInt(y);
        const el = document.getElementById(idMagnet);
        el.style.top = y + "px";
        el.style.left = x + "px";
    }


    static magnetsClear() {
        MagnetManager.clearMagnet();
    }

    static magnetRemove(idMagnet) {
        MagnetManager.magnetRemove(idMagnet);
    }

    static magnetChange(idMagnet, outerHTML) {
        document.getElementById(idMagnet).outerHTML = outerHTML;
    }

    static boardClear() {
        BoardManager._clear();
        BoardManager.save(undefined);
        Menu.hide();
    }

    static questionAdd(userID, idquestion, question) {
        Discussion.addQuestion(userID, idquestion, question);
    }


    static questionRemove(questionID) {
        Discussion.removeQuestion(questionID);
    }

    static removeContour(points) {
        Drawing.removeContour(points);
    }

    static clearPolygon(points) {
        Drawing.clearPolygon(points);
    }

    static printMagnet(magnetID) {
        MagnetManager.printMagnet(document.getElementById(magnetID));
    }

    static cancel() {
        BoardManager.cancel();
    }

    static redo() {
        BoardManager.redo();
    }
}
