class EmployeePayrollData{
    
    // getter and setter method
    get id() { return this._id;}
    set id(id){
        this._id = id;
    }

    get name() { return this._name;}
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (nameRegex.test(name))
        this._name = name;
        else throw 'Name is Incorrect!';
    }
    
    get profilePic() {return this._ProfilePic;}
    set profilePic(profilePic){
        this._ProfilePic = profilePic;
    }

    get gender(){return this._gender;}
    set gender(gender) {
        this._gender = gender;
    }

    get Department(){return this._Department;}
    set Department(Department){
        this._Department=Department;
    }

    get salary(){return this._salary;}
    set salary(salary){
        this._salary=salary;
    }

    get Notes(){return this._Notes;}
    set Notes(Notes){
        this._Notes=Notes;
    }

    get StartDate(){return this._StartDate;}
    set StartDate(StartDate){
        this._StartDate=StartDate;
    }

    //method
    toString() {
        
        return "id =" +this.id + ", name' " + this.name + ", gender=' " +this.gender +
               ", profilePic= ' " +this.profilePic +", Department=" +this.Department +
               ", salary=" +this.salary + ", StartDate=" +this.StartDate + ", note=" +this.note;
    }
}


