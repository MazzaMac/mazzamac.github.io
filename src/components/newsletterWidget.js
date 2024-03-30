import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function NewsletterWidget ({url}){

  return ( <MailchimpSubscribe url={url}/> )

}
