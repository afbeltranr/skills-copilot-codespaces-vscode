function skillMember() {
    var member = {
        name: 'John Doe',
        age: 26,
        job: 'developer',
        sayName: function() {
            alert(this.name);
        }
    };
    return member;
}