pragma solidity ^0.4.17;

contract Contribution{
    
    struct Person {
        address recipient;
        string name;
        // Pool pool;
    }
    
    struct Pool{
        address creator;
        uint total_users;
    }
    
    Person[] public persons;
    
    
    modifier restricted() {
        require(msg.sender == msg.sender);
        _;
    }
    function MinutesToBlocks(uint _minute) public view returns (uint){
        return _minute * 4;
    }
    
    
    function createPerson(address recipient,string name) public restricted{
        Person memory newPerson = Person({
            recipient: recipient,
            name: name
        });
        persons.push(newPerson);
    }
    
    function payUsers(Person[] users) private pure returns (address){
        for(uint i = 0; i <= users.length; i++)
        {
            for(uint j=0; i<=users.length; j++){
                return(users[i].recipient);
            }
        } 
     
    }
}