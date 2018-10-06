pragma solidity ^0.4.17;
pragma experimental ABIEncoderV2;

contract CrowdFunder {
    
    address public creator;
    address public fundRecipient; // creator may be different than recipient
    uint public minimumToRaise; // required to reach at least this much, else everyone gets refund
    string campaignUrl; 
    // byte constant version = 1;

   // State variables
    State public state = State.Fundraising; // initialize on create
    uint public totalRaised;
    uint public currentBalance;
    uint public raiseBy;
    uint public completeAt;
    Contribution[] contributions;
    
    
    // Data structures
    enum State {
        Fundraising,
        ExpiredRefund,
        Successful,
        Closed
    }

    struct Contribution {
        uint amount;
        address contributor;
    }

    struct CrowdFunding{
        address creator;
        uint timeInHoursForFundraising;
        uint totalRaised;
        uint currentBalance;
        uint completeAt;
        address fundRecipient; 
        uint minimumToRaise; 
        string campaignUrl;
        uint my_length;
        mapping(uint => Contribution) contributions;
    }
    
    CrowdFunding[] crowdfundings;

    
    function createCrowdFunding() public(
        uint _timeInHoursForFundraising,
        string _campaignUrl,
        address _fundRecipient,
        uint _minimumToRaise
        )
        {
        
        CrowdFunding memory new_crowd_funding = CrowdFunding({
            creator: msg.sender,
            timeInHoursForFundraising: _timeInHoursForFundraising,
            campaignUrl: _campaignUrl,
            fundRecipient: _fundRecipient,
            minimumToRaise: _minimumToRaise,
            totalRaised: 0, 
            currentBalance:0,
            completeAt: now,
            my_length: 0
            // contributions: createContribution()
            
        });
        crowdfundings.push(new_crowd_funding);

        }

    function CrowdFunder(){
    }
    
   

    function contribute(uint index)
    public payable returns (uint256)
    {
      Contribution memory new_contribution =  Contribution({
            amount: msg.value,
            contributor: msg.sender
        });
                
        crowdfundings[index].contributions[crowdfundings[index].my_length]= new_contribution;
        crowdfundings[index].totalRaised += msg.value;
        crowdfundings[index].currentBalance = totalRaised;
        crowdfundings[index].my_length++;
        return crowdfundings[index].my_length - 1; // return id
    }



    }
    