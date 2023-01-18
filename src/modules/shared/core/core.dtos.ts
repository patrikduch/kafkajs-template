import { Injectable } from "@nestjs/common";

/**
 * @class HttpResponse Encapsulation DTO that must be used in every HTTP GET request.
 * @author Patrik Duch
 */

@Injectable()
export class HttpResponse<T> {
    // @Getter
    private _data: T;
    private _error?: String;

    public get data() {
        return this._data; 
    }

    public set data(newdata: T) {
        this._data = newdata;
    }

    public get error() {
        return this._error;
    }
    
    public set error(error: String | undefined) {
        this._error = error;
    }
}