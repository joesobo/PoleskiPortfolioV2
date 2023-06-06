
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References:   
> Links: 

## Questionnaire
- A questionnaire is a [[Resource]] representing a set of questions
- It can be organized into a simple array or nested groups of questions
- The result of a questionnaire is communicated with a [[QuestionnaireResponse]]

#### Examples of Questionnaires include:
- Past medical history (PMH)
- Family diseases
- Social history
- Research questionnaires/Clinical research forms (CRFs)
- Quality and evaluation forms
- Patient intake form (e.g. clipboard)
- Forms to support insurance claims

#### [[Extension]]s
- Can be extended using Questionnaire extensions - https://hl7.org/fhir/R4/questionnaire-extensions.html
	- minOccurs
	- maxOccurs
	- hidden
	- itemControl
	- choiceOrientation
	- referenceResource
	- referenceProfile
	- displayCategory
	- fhirType
	- unit
	- unitOption
	- unitValueSet
	- optionPrefix
	- optionExclusive
	- usageMode
	- supportLink
	- baseType
	- signatureRequired
	- constraint
	- sliderStepValue
- Can be extended using common [[Element]] extensions - https://hl7.org/fhir/R4/element-extensions.html
	- can be used to constrain answers
	- minLength
	- regex
	- entryFormat
	- minValue
	- maxValue
	- maxDecimalPlace
	- mimeType
	- maxSize