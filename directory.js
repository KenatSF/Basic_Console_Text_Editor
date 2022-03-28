const fs = require('fs')
const path = require('path')

class Directory {

    constructor(){
        this._path = '';
        this.createDocsDir();
        
    }

    createDocsDir(){
        if(!fs.existsSync(path.join(this._path, 'docs'))){
            fs.mkdirSync("./docs")
            this._path = path.join(this._path, 'docs')
        } 
        else{
            this._path = path.join(this._path, 'docs')
        }
    }

    getPath(){
        return this._path;
    }

    getShortPath(){
        const paths = path.parse(this._path);
        let delimiter = "/";

        if(paths.dir.indexOf(delimiter) < 0){
            delimiter = `\\`;
        }

        return `${paths.root}...${delimiter}${paths.name}`;
    }

    getFilesInDir(){
        const files = fs.readdirSync(this._path);
        let n = 0;
        console.log(`
        ====================================
        Ubicación: ${this.getShortPath()}
        ====================================`);
        files.forEach(file => {
            console.log(`        ${file}`);
            n++;
        });
    }

}


module.exports = Directory;

