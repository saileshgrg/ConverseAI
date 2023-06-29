export class User {
    id: number | undefined;
    name: string = '';
    email: string = '';
    isActive: boolean = false;

    constructor(initializer?: any) {
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.name) this.name = initializer.name;
        if(initializer.email) this.email = initializer.email;
        if(initializer.isActive) this.isActive = initializer.isActive; 
    }
    
}

