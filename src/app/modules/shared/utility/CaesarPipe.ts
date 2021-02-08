import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ceaserPipe'})
export class CeaserPipe implements PipeTransform{
    
    transform(text: string,  key: number){
        for(let i=0;i<text.length;i++){
            if((text.charCodeAt(i) >= 97 
                && text.charCodeAt(i) <= (122))
                || (text.charCodeAt(i) >= 65 
                    && text.charCodeAt(i) <= (90))){
                        text = text.substr(0,i) 
                            + String.fromCharCode(                            
                                text.charCodeAt(i)+key >= (90+key)
                                    &&  text.charCodeAt(i)+key < (97+key)
                                ? 65 + (text.charCodeAt(i)+key - 90)
                                : text.charCodeAt(i)+key >= (122+key)
                                ? 97 + (text.charCodeAt(i)+key - 122)
                                : text.charCodeAt(i)+key
                                ) 
                            + text.substr(i + 1)
                }            
        }
        return text;
    }

}