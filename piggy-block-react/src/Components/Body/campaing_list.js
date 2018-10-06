import React from 'react';

const CampaignLists = (props) => {
    const clientInfo = {id: props.campaignItem.id, url: props.campaignItem.url}
    return(
        <tr onClick={props.launchClient(clientInfo)}>
            <td>{props.campaignItem.id}</td>
            <td>{props.campaignItem.url}</td>
            <td>{props.campaignItem.ammount}</td>
            <td>{props.campaignItem.contributors}</td>
        </tr>
    );
};

export default CampaignLists;