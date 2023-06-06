
> [!INFO]
> 
> tags:  #🕸️/🟦   
> References:   
> Links: 


## Definition
FHIR (**Fast Healthcare Interoperability Resources**) is a standard in healthcare information used for exchanging between different systems regardless of how its stored on either end.

## Terms
- [[Element]]
- [[Resource]]
- [[Extension]]
- [[Plugin]]
- [[FHIR Engine]]

### [[Extension]] vs [[Plugin]]
- An extension is a feature that represents data not covered in the standard FHIR [[Resource]] type
- a plugin doesnt change the data model itself, but adds new functionality to the software processing the data ([[FHIR Engine]])

### How do they all connect?
- [[Element]]s make up a [[Resource]]
- [[Extension]]s extend [[Resource]]s and [[Element]]s
- [[FHIR Engine]] modifies [[Resource]]s sometimes with [[Plugin]]s

### Example
- The [[FHIR Engine]] handles many different types of [[Resource]]s such as Patient, Practitioner, Observation, etc.
- Each of these [[Resource]]s is made up of multiple [[Element]]s like  'name', 'birthDate', 'gender', etc.
- Now suppose we want to support additional info about a patients language proficiency. This is not part of the typical Patient [[Resource]]
- We define an [[Extension]] to handle this additional info. This extension contains its own [[Element]] like 'language' and 'proficiencyLevel'
- If the Patients proficiencyLevel is too low for English we want to translate it so they can understand the form better. Todo this we install a translation [[Plugin]] into the [[FHIR Engine]] that interactions with the language [[Extension]] to choose their preferred language

## Extensions
