// 100 Essential Vocabulary Words for MBA CET & Daily Usage
const vocabularyData = [
    // A - Essential Words
    {
        word: "Abundant",
        type: "adjective",
        meaning: "Existing or available in large quantities; plentiful",
        example: "The region has abundant natural resources that attract many investors.",
        antonym: "Scarce",
        antonymMeaning: "Insufficient for the demand; not enough",
        antonymExample: "Water is scarce in desert regions during summer."
    },
    {
        word: "Acknowledge",
        type: "verb",
        meaning: "To accept or admit the existence or truth of something",
        example: "The manager acknowledged the team's hard work during the meeting.",
        antonym: "Deny",
        antonymMeaning: "To refuse to admit the truth or existence of something",
        antonymExample: "He denied any involvement in the project failure."
    },
    {
        word: "Ambiguous",
        type: "adjective",
        meaning: "Open to more than one interpretation; unclear or inexact",
        example: "The contract contained several ambiguous clauses that needed clarification.",
        antonym: "Clear",
        antonymMeaning: "Easy to perceive, understand, or interpret",
        antonymExample: "The instructions were clear and easy to follow."
    },
    {
        word: "Affluent",
        type: "adjective",
        meaning: "Having a great deal of money; wealthy",
        example: "The affluent neighborhood has the best schools and amenities.",
        antonym: "Poor",
        antonymMeaning: "Lacking sufficient money to live at a comfortable standard",
        antonymExample: "Many poor families struggle to afford basic necessities."
    },
    {
        word: "Articulate",
        type: "adjective/verb",
        meaning: "Having or showing the ability to speak fluently and coherently",
        example: "She is an articulate speaker who can explain complex ideas simply.",
        antonym: "Inarticulate",
        antonymMeaning: "Unable to speak distinctly or express oneself clearly",
        antonymExample: "He became inarticulate with nervousness during the interview."
    },
    {
        word: "Assertive",
        type: "adjective",
        meaning: "Having or showing a confident and forceful personality",
        example: "An assertive leader can guide the team through challenging times.",
        antonym: "Passive",
        antonymMeaning: "Accepting what happens without active response or resistance",
        antonymExample: "His passive attitude resulted in missed opportunities."
    },
    {
        word: "Authentic",
        type: "adjective",
        meaning: "Of undisputed origin; genuine and real",
        example: "The museum displayed authentic artifacts from ancient civilizations.",
        antonym: "Fake",
        antonymMeaning: "Not genuine; counterfeit or fraudulent",
        antonymExample: "The fake documents were discovered during the audit."
    },
    {
        word: "Alleviate",
        type: "verb",
        meaning: "To make suffering, deficiency, or a problem less severe",
        example: "The new policy will alleviate the burden on small businesses.",
        antonym: "Aggravate",
        antonymMeaning: "To make a problem or situation worse",
        antonymExample: "His comments only aggravated the already tense situation."
    },

    // B - Essential Words
    {
        word: "Benevolent",
        type: "adjective",
        meaning: "Well-meaning and kindly; showing goodwill",
        example: "The benevolent businessman donated millions to charity.",
        antonym: "Malevolent",
        antonymMeaning: "Having or showing a wish to do evil to others",
        antonymExample: "The malevolent intentions of the villain were revealed."
    },
    {
        word: "Brevity",
        type: "noun",
        meaning: "Concise and exact use of words; shortness of time",
        example: "The CEO appreciated brevity in business communications.",
        antonym: "Verbosity",
        antonymMeaning: "The quality of using more words than necessary",
        antonymExample: "His verbosity made the simple report unnecessarily long."
    },
    {
        word: "Bolster",
        type: "verb",
        meaning: "To support or strengthen; to prop up",
        example: "The government introduced measures to bolster the economy.",
        antonym: "Undermine",
        antonymMeaning: "To weaken or damage gradually",
        antonymExample: "Constant criticism can undermine an employee's confidence."
    },
    {
        word: "Burgeon",
        type: "verb",
        meaning: "To begin to grow or increase rapidly; flourish",
        example: "The tech industry continues to burgeon in major cities.",
        antonym: "Decline",
        antonymMeaning: "To gradually become smaller, fewer, or less",
        antonymExample: "Sales began to decline after the scandal."
    },

    // C - Essential Words
    {
        word: "Candid",
        type: "adjective",
        meaning: "Truthful and straightforward; frank",
        example: "I appreciate your candid feedback on my presentation.",
        antonym: "Deceptive",
        antonymMeaning: "Giving an appearance or impression different from the truth",
        antonymExample: "The deceptive advertisement misled many customers."
    },
    {
        word: "Coherent",
        type: "adjective",
        meaning: "Logical and consistent; forming a unified whole",
        example: "The report presented a coherent analysis of the market trends.",
        antonym: "Incoherent",
        antonymMeaning: "Expressed in an incomprehensible or confusing way",
        antonymExample: "His incoherent explanation left everyone confused."
    },
    {
        word: "Comprehensive",
        type: "adjective",
        meaning: "Complete and including all or nearly all elements or aspects",
        example: "The company conducted a comprehensive review of its operations.",
        antonym: "Limited",
        antonymMeaning: "Restricted in size, amount, or extent",
        antonymExample: "The limited study only covered a small sample size."
    },
    {
        word: "Concise",
        type: "adjective",
        meaning: "Giving a lot of information clearly in few words",
        example: "Write a concise summary of the meeting points.",
        antonym: "Verbose",
        antonymMeaning: "Using or expressed in more words than are needed",
        antonymExample: "The verbose report took hours to read."
    },
    {
        word: "Consensus",
        type: "noun",
        meaning: "General agreement among a group of people",
        example: "The board reached a consensus on the new policy.",
        antonym: "Disagreement",
        antonymMeaning: "Lack of consensus or approval",
        antonymExample: "There was strong disagreement about the budget allocation."
    },
    {
        word: "Contemplate",
        type: "verb",
        meaning: "To think deeply or consider carefully",
        example: "We need to contemplate all options before making a decision.",
        antonym: "Ignore",
        antonymMeaning: "To refuse to take notice of or acknowledge",
        antonymExample: "You cannot ignore the warning signs of failure."
    },
    {
        word: "Credible",
        type: "adjective",
        meaning: "Able to be believed; convincing",
        example: "The witness provided credible testimony in court.",
        antonym: "Dubious",
        antonymMeaning: "Hesitating or doubting; not to be relied upon",
        antonymExample: "The dubious claims raised suspicions among investors."
    },
    {
        word: "Crucial",
        type: "adjective",
        meaning: "Of great importance; critical",
        example: "Time management is crucial for MBA entrance exam preparation.",
        antonym: "Trivial",
        antonymMeaning: "Of little value or importance",
        antonymExample: "Don't waste time on trivial matters."
    },

    // D - Essential Words
    {
        word: "Diligent",
        type: "adjective",
        meaning: "Having or showing care and conscientiousness in work",
        example: "Diligent employees are always valued by organizations.",
        antonym: "Lazy",
        antonymMeaning: "Unwilling to work or use energy",
        antonymExample: "Lazy workers often miss deadlines."
    },
    {
        word: "Diminish",
        type: "verb",
        meaning: "To make or become less; reduce",
        example: "The scandal did not diminish his popularity among supporters.",
        antonym: "Increase",
        antonymMeaning: "To become or make greater in size or amount",
        antonymExample: "The company aims to increase its market share."
    },
    {
        word: "Discern",
        type: "verb",
        meaning: "To perceive or recognize something clearly",
        example: "It is difficult to discern the truth from false information.",
        antonym: "Overlook",
        antonymMeaning: "To fail to notice or consider something",
        antonymExample: "The auditor overlooked several important discrepancies."
    },
    {
        word: "Diverse",
        type: "adjective",
        meaning: "Showing a great deal of variety; very different",
        example: "The company has a diverse workforce from various backgrounds.",
        antonym: "Homogeneous",
        antonymMeaning: "Of the same kind; uniform throughout",
        antonymExample: "The homogeneous culture limited creative thinking."
    },
    {
        word: "Dubious",
        type: "adjective",
        meaning: "Hesitating or doubting; not to be relied upon",
        example: "The proposal had some dubious financial projections.",
        antonym: "Certain",
        antonymMeaning: "Known for sure; established beyond doubt",
        antonymExample: "We are certain about the project's success."
    },

    // E - Essential Words
    {
        word: "Eloquent",
        type: "adjective",
        meaning: "Fluent or persuasive in speaking or writing",
        example: "The eloquent speech moved the entire audience.",
        antonym: "Inarticulate",
        antonymMeaning: "Unable to express one's ideas clearly",
        antonymExample: "His inarticulate response did not impress the panel."
    },
    {
        word: "Enhance",
        type: "verb",
        meaning: "To intensify, increase, or improve quality or value",
        example: "Technology can enhance productivity in the workplace.",
        antonym: "Diminish",
        antonymMeaning: "To make or become less",
        antonymExample: "Poor lighting can diminish the reading experience."
    },
    {
        word: "Entrepreneur",
        type: "noun",
        meaning: "A person who sets up a business taking on financial risks",
        example: "The young entrepreneur founded three successful startups.",
        antonym: "Employee",
        antonymMeaning: "A person employed for wages or salary",
        antonymExample: "As an employee, he had limited decision-making power."
    },
    {
        word: "Exemplary",
        type: "adjective",
        meaning: "Serving as a desirable model; representing the best",
        example: "Her exemplary performance earned her a promotion.",
        antonym: "Inferior",
        antonymMeaning: "Lower in rank, status, or quality",
        antonymExample: "The inferior product quality led to customer complaints."
    },
    {
        word: "Expedite",
        type: "verb",
        meaning: "To make an action or process happen faster",
        example: "We need to expedite the delivery to meet the deadline.",
        antonym: "Delay",
        antonymMeaning: "To make late or slow; postpone",
        antonymExample: "Bureaucratic procedures often delay project approvals."
    },

    // F - Essential Words
    {
        word: "Feasible",
        type: "adjective",
        meaning: "Possible to do easily or conveniently; practical",
        example: "The committee approved only feasible proposals for funding.",
        antonym: "Impractical",
        antonymMeaning: "Not adapted for use or action; not sensible",
        antonymExample: "The impractical plan was rejected immediately."
    },
    {
        word: "Fluctuate",
        type: "verb",
        meaning: "To rise and fall irregularly in number or amount",
        example: "Stock prices fluctuate based on market conditions.",
        antonym: "Stabilize",
        antonymMeaning: "To make or become unlikely to change or fail",
        antonymExample: "The government took measures to stabilize the economy."
    },
    {
        word: "Foster",
        type: "verb",
        meaning: "To encourage or promote the development of something",
        example: "Good managers foster creativity and innovation in their teams.",
        antonym: "Discourage",
        antonymMeaning: "To cause someone to lose confidence or enthusiasm",
        antonymExample: "Negative feedback can discourage even talented employees."
    },
    {
        word: "Frugal",
        type: "adjective",
        meaning: "Sparing or economical with regard to money or resources",
        example: "A frugal lifestyle helped him save for his business.",
        antonym: "Extravagant",
        antonymMeaning: "Lacking restraint in spending money or using resources",
        antonymExample: "Their extravagant spending led to financial troubles."
    },

    // G - Essential Words
    {
        word: "Genuine",
        type: "adjective",
        meaning: "Truly what something is said to be; authentic",
        example: "Her genuine concern for employees earned their respect.",
        antonym: "Artificial",
        antonymMeaning: "Made or produced by human beings rather than naturally",
        antonymExample: "His artificial smile didn't fool anyone."
    },
    {
        word: "Gregarious",
        type: "adjective",
        meaning: "Fond of company; sociable",
        example: "A gregarious personality is valuable in sales and marketing roles.",
        antonym: "Introverted",
        antonymMeaning: "Shy, reserved, or inward-looking",
        antonymExample: "The introverted analyst preferred working alone."
    },

    // H - Essential Words
    {
        word: "Hinder",
        type: "verb",
        meaning: "To create difficulties resulting in delay or obstruction",
        example: "Lack of funding will hinder the project's progress.",
        antonym: "Facilitate",
        antonymMeaning: "To make an action or process easier",
        antonymExample: "Technology can facilitate communication across borders."
    },
    {
        word: "Hypothetical",
        type: "adjective",
        meaning: "Supposed but not necessarily real or true; assumed",
        example: "Let's consider a hypothetical scenario for planning purposes.",
        antonym: "Actual",
        antonymMeaning: "Existing in fact; real",
        antonymExample: "The actual results exceeded our expectations."
    },

    // I - Essential Words
    {
        word: "Imminent",
        type: "adjective",
        meaning: "About to happen; impending",
        example: "The company announced an imminent merger with its competitor.",
        antonym: "Distant",
        antonymMeaning: "Far away in time; remote",
        antonymExample: "Retirement seems like a distant prospect for young professionals."
    },
    {
        word: "Impartial",
        type: "adjective",
        meaning: "Treating all rivals or disputants equally; fair and just",
        example: "An impartial judge is essential for fair trial proceedings.",
        antonym: "Biased",
        antonymMeaning: "Unfairly prejudiced for or against someone or something",
        antonymExample: "The biased report favored one political party."
    },
    {
        word: "Implement",
        type: "verb",
        meaning: "To put into effect; execute",
        example: "The company will implement the new strategy next quarter.",
        antonym: "Abolish",
        antonymMeaning: "To formally put an end to a system or practice",
        antonymExample: "The government decided to abolish the outdated law."
    },
    {
        word: "Inevitable",
        type: "adjective",
        meaning: "Certain to happen; unavoidable",
        example: "Change is inevitable in the fast-paced business environment.",
        antonym: "Avoidable",
        antonymMeaning: "Able to be prevented or kept from happening",
        antonymExample: "Many workplace accidents are avoidable with proper training."
    },
    {
        word: "Innovative",
        type: "adjective",
        meaning: "Featuring new methods; advanced and original",
        example: "Innovative solutions are needed to address climate change.",
        antonym: "Conventional",
        antonymMeaning: "Based on or in accordance with traditional practice",
        antonymExample: "Conventional methods may not work in the digital age."
    },
    {
        word: "Integrity",
        type: "noun",
        meaning: "The quality of being honest and having strong moral principles",
        example: "Business leaders must maintain integrity in all their dealings.",
        antonym: "Dishonesty",
        antonymMeaning: "Deceitfulness; willingness to lie or cheat",
        antonymExample: "Dishonesty in business leads to loss of trust."
    },

    // J - Essential Words
    {
        word: "Jeopardize",
        type: "verb",
        meaning: "To put at risk; endanger",
        example: "Poor decisions can jeopardize the company's reputation.",
        antonym: "Protect",
        antonymMeaning: "To keep safe from harm or injury",
        antonymExample: "Insurance helps protect businesses from financial losses."
    },
    {
        word: "Judicious",
        type: "adjective",
        meaning: "Having, showing, or done with good judgment or sense",
        example: "Judicious use of resources is essential for sustainability.",
        antonym: "Foolish",
        antonymMeaning: "Lacking good sense or judgment",
        antonymExample: "It was foolish to invest without proper research."
    },

    // K - Essential Words
    {
        word: "Keen",
        type: "adjective",
        meaning: "Having or showing eagerness or enthusiasm; sharp",
        example: "She has a keen interest in financial markets.",
        antonym: "Indifferent",
        antonymMeaning: "Having no particular interest or sympathy",
        antonymExample: "He seemed indifferent to the company's problems."
    },

    // L - Essential Words
    {
        word: "Lucrative",
        type: "adjective",
        meaning: "Producing a great deal of profit",
        example: "The tech industry offers lucrative career opportunities.",
        antonym: "Unprofitable",
        antonymMeaning: "Not yielding profit or financial gain",
        antonymExample: "The unprofitable division was eventually closed down."
    },
    {
        word: "Legitimate",
        type: "adjective",
        meaning: "Conforming to the law or rules; justifiable",
        example: "The company addressed all legitimate concerns of stakeholders.",
        antonym: "Illegitimate",
        antonymMeaning: "Not authorized by law; not in accordance with rules",
        antonymExample: "Illegitimate practices led to the firm's downfall."
    },

    // M - Essential Words
    {
        word: "Meticulous",
        type: "adjective",
        meaning: "Showing great attention to detail; very careful",
        example: "The accountant was meticulous in reviewing financial statements.",
        antonym: "Careless",
        antonymMeaning: "Not giving sufficient attention or thought",
        antonymExample: "Careless mistakes can be costly in business."
    },
    {
        word: "Mitigate",
        type: "verb",
        meaning: "To make less severe, serious, or painful",
        example: "The company took steps to mitigate the impact of recession.",
        antonym: "Intensify",
        antonymMeaning: "To become or make more intense",
        antonymExample: "The conflict only intensified after the negotiations failed."
    },
    {
        word: "Mundane",
        type: "adjective",
        meaning: "Lacking interest or excitement; dull; ordinary",
        example: "Automation has reduced mundane tasks in the workplace.",
        antonym: "Exciting",
        antonymMeaning: "Causing great enthusiasm and eagerness",
        antonymExample: "The exciting project attracted top talent."
    },

    // N - Essential Words
    {
        word: "Negligent",
        type: "adjective",
        meaning: "Failing to take proper care in doing something",
        example: "The negligent manager overlooked critical safety protocols.",
        antonym: "Careful",
        antonymMeaning: "Making sure to avoid potential danger or mistakes",
        antonymExample: "Careful planning prevents costly errors."
    },
    {
        word: "Noteworthy",
        type: "adjective",
        meaning: "Interesting, significant, or deserving attention",
        example: "The company made noteworthy progress in sustainability efforts.",
        antonym: "Insignificant",
        antonymMeaning: "Too small or unimportant to be worth consideration",
        antonymExample: "The insignificant changes had no real impact."
    },

    // O - Essential Words
    {
        word: "Objective",
        type: "adjective/noun",
        meaning: "Not influenced by personal feelings; impartial; a goal",
        example: "The research provided an objective analysis of market trends.",
        antonym: "Subjective",
        antonymMeaning: "Based on personal feelings or opinions",
        antonymExample: "Art criticism is often subjective."
    },
    {
        word: "Obsolete",
        type: "adjective",
        meaning: "No longer produced or used; out of date",
        example: "Outdated technology quickly becomes obsolete.",
        antonym: "Current",
        antonymMeaning: "Belonging to the present time; happening now",
        antonymExample: "Stay updated with current industry trends."
    },
    {
        word: "Optimistic",
        type: "adjective",
        meaning: "Hopeful and confident about the future",
        example: "Investors remain optimistic about the market recovery.",
        antonym: "Pessimistic",
        antonymMeaning: "Tending to see the worst aspect of things",
        antonymExample: "A pessimistic outlook can hinder decision-making."
    },

    // P - Essential Words
    {
        word: "Pragmatic",
        type: "adjective",
        meaning: "Dealing with things sensibly and realistically",
        example: "A pragmatic approach is needed to solve complex problems.",
        antonym: "Idealistic",
        antonymMeaning: "Characterized by unrealistic or impractical ideals",
        antonymExample: "His idealistic plans ignored budget constraints."
    },
    {
        word: "Precarious",
        type: "adjective",
        meaning: "Not securely held; dangerously likely to fall or collapse",
        example: "The company is in a precarious financial position.",
        antonym: "Stable",
        antonymMeaning: "Not likely to change or fail; firmly established",
        antonymExample: "A stable income provides financial security."
    },
    {
        word: "Precedent",
        type: "noun",
        meaning: "An earlier event or action serving as an example",
        example: "This decision will set a precedent for future cases.",
        antonym: "Anomaly",
        antonymMeaning: "Something that deviates from what is standard or normal",
        antonymExample: "The unusual result was an anomaly in our data."
    },
    {
        word: "Proficient",
        type: "adjective",
        meaning: "Competent or skilled in doing something",
        example: "She is proficient in multiple programming languages.",
        antonym: "Incompetent",
        antonymMeaning: "Not having the necessary skills to do something well",
        antonymExample: "The incompetent handling of the project led to delays."
    },
    {
        word: "Prominent",
        type: "adjective",
        meaning: "Important; famous; easily seen or noticed",
        example: "The prominent businessman spoke at the conference.",
        antonym: "Obscure",
        antonymMeaning: "Not discovered or known about; uncertain",
        antonymExample: "The obscure reference went unnoticed by most readers."
    },
    {
        word: "Prudent",
        type: "adjective",
        meaning: "Acting with care and thought for the future",
        example: "It is prudent to save for unexpected expenses.",
        antonym: "Reckless",
        antonymMeaning: "Without thinking about the consequences",
        antonymExample: "Reckless spending depleted his savings quickly."
    },

    // Q - Essential Words
    {
        word: "Quintessential",
        type: "adjective",
        meaning: "Representing the most perfect example of a quality",
        example: "He is the quintessential entrepreneur – innovative and resilient.",
        antonym: "Atypical",
        antonymMeaning: "Not representative of a type or group",
        antonymExample: "Her atypical approach surprised everyone."
    },

    // R - Essential Words
    {
        word: "Rational",
        type: "adjective",
        meaning: "Based on reason or logic rather than emotions",
        example: "Rational decision-making is crucial in business management.",
        antonym: "Irrational",
        antonymMeaning: "Not logical or reasonable",
        antonymExample: "Fear can lead to irrational decisions."
    },
    {
        word: "Redundant",
        type: "adjective",
        meaning: "No longer needed or useful; superfluous",
        example: "The new system made several manual processes redundant.",
        antonym: "Essential",
        antonymMeaning: "Absolutely necessary; extremely important",
        antonymExample: "Time management is essential for exam success."
    },
    {
        word: "Resilient",
        type: "adjective",
        meaning: "Able to withstand or recover quickly from difficulties",
        example: "Resilient businesses adapt well to changing markets.",
        antonym: "Fragile",
        antonymMeaning: "Easily broken or damaged; delicate",
        antonymExample: "The fragile economy couldn't withstand another shock."
    },
    {
        word: "Robust",
        type: "adjective",
        meaning: "Strong and healthy; sturdy",
        example: "The company has a robust financial performance this year.",
        antonym: "Weak",
        antonymMeaning: "Lacking physical strength and energy; fragile",
        antonymExample: "Weak demand led to lower sales figures."
    },

    // S - Essential Words
    {
        word: "Scrutinize",
        type: "verb",
        meaning: "To examine or inspect closely and thoroughly",
        example: "Auditors scrutinize financial records for discrepancies.",
        antonym: "Glance",
        antonymMeaning: "To take a brief or hurried look",
        antonymExample: "He just glanced at the report without reading it properly."
    },
    {
        word: "Significant",
        type: "adjective",
        meaning: "Sufficiently great or important to be worthy of attention",
        example: "The merger resulted in significant cost savings.",
        antonym: "Negligible",
        antonymMeaning: "So small or unimportant as to be not worth considering",
        antonymExample: "The impact on profits was negligible."
    },
    {
        word: "Skeptical",
        type: "adjective",
        meaning: "Not easily convinced; having doubts",
        example: "Investors remain skeptical about the company's turnaround plan.",
        antonym: "Credulous",
        antonymMeaning: "Having too great a readiness to believe things",
        antonymExample: "The credulous investor fell for the scam."
    },
    {
        word: "Sophisticated",
        type: "adjective",
        meaning: "Having refined knowledge; complex and developed",
        example: "The company uses sophisticated data analytics for insights.",
        antonym: "Simple",
        antonymMeaning: "Easily understood; not complex",
        antonymExample: "We need a simple solution that everyone can use."
    },
    {
        word: "Stagnant",
        type: "adjective",
        meaning: "Showing no activity; not advancing or developing",
        example: "The stagnant economy led to high unemployment rates.",
        antonym: "Dynamic",
        antonymMeaning: "Characterized by constant change and progress",
        antonymExample: "A dynamic market requires quick adaptation."
    },
    {
        word: "Substantial",
        type: "adjective",
        meaning: "Of considerable importance, size, or worth",
        example: "The company made substantial investments in R&D.",
        antonym: "Minimal",
        antonymMeaning: "Of a minimum amount, quantity, or degree",
        antonymExample: "The changes had only minimal impact on operations."
    },
    {
        word: "Succinct",
        type: "adjective",
        meaning: "Briefly and clearly expressed",
        example: "Provide a succinct summary of your project proposal.",
        antonym: "Lengthy",
        antonymMeaning: "Of considerable or unusual duration",
        antonymExample: "The lengthy presentation tested everyone's patience."
    },
    {
        word: "Sustainable",
        type: "adjective",
        meaning: "Able to be maintained at a certain level; eco-friendly",
        example: "Companies are adopting sustainable business practices.",
        antonym: "Unsustainable",
        antonymMeaning: "Not able to be maintained at the current rate",
        antonymExample: "The unsustainable growth model eventually collapsed."
    },

    // T - Essential Words
    {
        word: "Tangible",
        type: "adjective",
        meaning: "Clear and definite; real; able to be touched",
        example: "The project delivered tangible results within six months.",
        antonym: "Intangible",
        antonymMeaning: "Unable to be touched or grasped; not having physical presence",
        antonymExample: "Brand reputation is an intangible but valuable asset."
    },
    {
        word: "Tenacious",
        type: "adjective",
        meaning: "Tending to keep a firm hold; persistent and determined",
        example: "A tenacious attitude is essential for entrepreneurial success.",
        antonym: "Yielding",
        antonymMeaning: "Inclined to give way to pressure; compliant",
        antonymExample: "His yielding nature made negotiations easy."
    },
    {
        word: "Tentative",
        type: "adjective",
        meaning: "Not certain or fixed; provisional",
        example: "The committee gave tentative approval to the proposal.",
        antonym: "Definite",
        antonymMeaning: "Clearly stated or decided; certain",
        antonymExample: "We need a definite answer by tomorrow."
    },
    {
        word: "Thorough",
        type: "adjective",
        meaning: "Complete with regard to every detail; not superficial",
        example: "The team conducted a thorough investigation of the issue.",
        antonym: "Superficial",
        antonymMeaning: "Existing or occurring at or on the surface; shallow",
        antonymExample: "A superficial review missed the core problem."
    },
    {
        word: "Transparent",
        type: "adjective",
        meaning: "Open to public scrutiny; easy to perceive or understand",
        example: "Transparent communication builds trust with stakeholders.",
        antonym: "Opaque",
        antonymMeaning: "Not transparent; difficult to understand",
        antonymExample: "The opaque policies confused many customers."
    },

    // U - Essential Words
    {
        word: "Unanimous",
        type: "adjective",
        meaning: "Fully in agreement; united in opinion",
        example: "The board reached a unanimous decision on the merger.",
        antonym: "Divided",
        antonymMeaning: "Separated into parts or pieces; disagreeing",
        antonymExample: "The committee was divided on the issue."
    },
    {
        word: "Unprecedented",
        type: "adjective",
        meaning: "Never done or known before; without previous example",
        example: "The pandemic caused unprecedented disruption to businesses.",
        antonym: "Common",
        antonymMeaning: "Occurring, found, or done frequently",
        antonymExample: "Such delays are common during peak season."
    },
    {
        word: "Utilize",
        type: "verb",
        meaning: "To make practical and effective use of something",
        example: "We must utilize our resources efficiently.",
        antonym: "Waste",
        antonymMeaning: "To use or expend carelessly or inefficiently",
        antonymExample: "Don't waste time on unproductive activities."
    },

    // V - Essential Words
    {
        word: "Viable",
        type: "adjective",
        meaning: "Capable of working successfully; feasible",
        example: "The startup presented a viable business model to investors.",
        antonym: "Impractical",
        antonymMeaning: "Not adapted for actual use; not sensible",
        antonymExample: "The impractical design was rejected by engineers."
    },
    {
        word: "Volatile",
        type: "adjective",
        meaning: "Liable to change rapidly and unpredictably",
        example: "Investing in volatile markets requires careful risk management.",
        antonym: "Stable",
        antonymMeaning: "Not likely to give way or change; firmly established",
        antonymExample: "Investors prefer stable returns over time."
    },
    {
        word: "Versatile",
        type: "adjective",
        meaning: "Able to adapt to many different functions or activities",
        example: "A versatile skill set is valuable in today's job market.",
        antonym: "Limited",
        antonymMeaning: "Restricted in scope or extent",
        antonymExample: "His limited experience was a disadvantage."
    },

    // W - Essential Words
    {
        word: "Warrant",
        type: "verb/noun",
        meaning: "To justify or necessitate; an official authorization",
        example: "The situation doesn't warrant such an extreme response.",
        antonym: "Prohibit",
        antonymMeaning: "To formally forbid by law or authority",
        antonymExample: "Company policy prohibits personal use of equipment."
    },
    {
        word: "Wary",
        type: "adjective",
        meaning: "Feeling or showing caution about possible dangers",
        example: "Investors are wary of market fluctuations.",
        antonym: "Careless",
        antonymMeaning: "Not giving sufficient attention to avoiding harm",
        antonymExample: "Careless investors often lose money in risky ventures."
    },

    // X - Essential Words
    {
        word: "Xenial",
        type: "adjective",
        meaning: "Hospitable, especially to visiting strangers or foreigners",
        example: "The xenial culture of the company welcomes international clients.",
        antonym: "Hostile",
        antonymMeaning: "Unfriendly; showing opposition or dislike",
        antonymExample: "A hostile work environment reduces productivity."
    },

    // Y - Essential Words
    {
        word: "Yearn",
        type: "verb",
        meaning: "To have an intense feeling of longing for something",
        example: "Many employees yearn for work-life balance.",
        antonym: "Despise",
        antonymMeaning: "To feel contempt or a deep dislike for",
        antonymExample: "He came to despise the monotonous routine."
    },

    // Z - Essential Words
    {
        word: "Zealous",
        type: "adjective",
        meaning: "Having or showing great energy or enthusiasm",
        example: "The zealous team completed the project ahead of schedule.",
        antonym: "Apathetic",
        antonymMeaning: "Showing or feeling no interest or enthusiasm",
        antonymExample: "An apathetic attitude affects team morale negatively."
    },
    {
        word: "Zenith",
        type: "noun",
        meaning: "The highest point reached; the peak of success",
        example: "The company reached its zenith with record profits this year.",
        antonym: "Nadir",
        antonymMeaning: "The lowest point; the point of greatest adversity",
        antonymExample: "The stock price hit its nadir during the recession."
    }
];

// DOM Elements
const vocabularyContainer = document.getElementById('vocabularyContainer');
const searchInput = document.getElementById('searchInput');
const loadingIndicator = document.getElementById('loadingIndicator');
const noResults = document.getElementById('noResults');
const scrollToTopBtn = document.getElementById('scrollToTop');
const tabButtons = document.querySelectorAll('.tab-btn');
const currentFilterSpan = document.getElementById('currentFilter');
const totalWordsSpan = document.getElementById('totalWords');

// Current state
let currentFilter = 'all';
let searchTerm = '';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    totalWordsSpan.textContent = `${vocabularyData.length} Words`;
    renderVocabulary();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Tab button clicks
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const letter = btn.dataset.letter;
            setActiveTab(btn);
            currentFilter = letter;
            updateFilterDisplay();
            renderVocabulary();
        });
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase().trim();
        renderVocabulary();
    });

    // Scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Set active tab
function setActiveTab(activeBtn) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Update filter display
function updateFilterDisplay() {
    if (currentFilter === 'all') {
        currentFilterSpan.textContent = 'Showing All';
    } else {
        currentFilterSpan.textContent = `Letter ${currentFilter}`;
    }
}

// Filter vocabulary based on current state
function filterVocabulary() {
    let filtered = [...vocabularyData];

    // Filter by letter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(vocab => 
            vocab.word.toUpperCase().startsWith(currentFilter)
        );
    }

    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(vocab =>
            vocab.word.toLowerCase().includes(searchTerm) ||
            vocab.meaning.toLowerCase().includes(searchTerm) ||
            vocab.antonym.toLowerCase().includes(searchTerm)
        );
    }

    return filtered;
}

// Highlight search term in text
function highlightText(text, term) {
    if (!term) return text;
    const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Escape special regex characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Create vocabulary card HTML
function createVocabCard(vocab) {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    
    card.innerHTML = `
        <button class="card-close" title="Close">×</button>
        <div class="word-header">
            <h2 class="word-title">${highlightText(vocab.word, searchTerm)}</h2>
            <span class="word-type">${vocab.type}</span>
        </div>
        
        <div class="card-details">
            <div class="meaning-section">
                <p class="section-label">Meaning</p>
                <p class="meaning-text">${highlightText(vocab.meaning, searchTerm)}</p>
            </div>
            
            <div class="example-section">
                <p class="section-label">Example</p>
                <p class="example-text">${vocab.example}</p>
            </div>
            
            <div class="antonym-section">
                <div class="antonym-header">
                    <span class="section-label">Antonym:</span>
                    <span class="antonym-word">${highlightText(vocab.antonym, searchTerm)}</span>
                </div>
                <p class="antonym-meaning">${vocab.antonymMeaning}</p>
                <p class="antonym-example">${vocab.antonymExample}</p>
            </div>
        </div>
    `;

    // Click to expand card
    card.addEventListener('click', (e) => {
        if (e.target.classList.contains('card-close')) {
            closeCard(card);
            return;
        }
        if (!card.classList.contains('expanded')) {
            openCard(card);
        }
    });

    // Close button
    const closeBtn = card.querySelector('.card-close');
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeCard(card);
    });
    
    return card;
}

// Modal overlay
let modalOverlay = document.querySelector('.modal-overlay');
if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    document.body.appendChild(modalOverlay);
    
    modalOverlay.addEventListener('click', () => {
        const expandedCard = document.querySelector('.vocab-card.expanded');
        if (expandedCard) {
            closeCard(expandedCard);
        }
    });
}

// Open card as popup
function openCard(card) {
    // Close any other open card first
    const previousCard = document.querySelector('.vocab-card.expanded');
    if (previousCard) {
        previousCard.classList.remove('expanded');
    }
    
    card.classList.add('expanded');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close card
function closeCard(card) {
    card.classList.remove('expanded');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const expandedCard = document.querySelector('.vocab-card.expanded');
        if (expandedCard) {
            closeCard(expandedCard);
        }
    }
});

// Render vocabulary cards
function renderVocabulary() {
    loadingIndicator.style.display = 'block';
    vocabularyContainer.innerHTML = '';
    noResults.style.display = 'none';

    // Small delay for smooth loading effect
    setTimeout(() => {
        const filteredVocab = filterVocabulary();
        loadingIndicator.style.display = 'none';

        if (filteredVocab.length === 0) {
            noResults.style.display = 'block';
            return;
        }

        // Create fragment for better performance
        const fragment = document.createDocumentFragment();
        
        filteredVocab.forEach((vocab, index) => {
            const card = createVocabCard(vocab);
            // Add staggered animation delay
            card.style.animationDelay = `${index * 0.05}s`;
            fragment.appendChild(card);
        });

        vocabularyContainer.appendChild(fragment);
    }, 100);
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');

function initTheme() {
    const savedTheme = localStorage.getItem('vocabmaster-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('vocabmaster-theme', isDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', toggleTheme);
initTheme();

// Console message for developers
console.log('📚 Vocabulary Master Loaded Successfully!');
console.log(`Total Words: ${vocabularyData.length}`);

