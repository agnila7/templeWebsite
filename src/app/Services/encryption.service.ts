import { Injectable } from "@angular/core";
import * as JsEncryptModule from 'jsencrypt';
import { PUBLIC_KEY } from "../public_key";

@Injectable({providedIn: 'root'})
export class EncryptionService{
    encryptMod: JsEncryptModule.JSEncrypt;

    constructor(){
        this.encryptMod = new JsEncryptModule.JSEncrypt();
        this.encryptMod.setPublicKey(PUBLIC_KEY);
    }
    encrypt(plainText: string): string {
        let encryptedText = this.encryptMod.encrypt(plainText);

        if(encryptedText){
            return encryptedText;
        }else{
            return '';
        }
    }
}