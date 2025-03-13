import { environment } from "../environtment";

export class WebPath{
    private static apiEndPoint = environment.apiEndPoint;

    static generateWebPath(...sections: string[]){
        return sections.reduce((path,section) => `${path}/${section}`, this.apiEndPoint);
    }
}