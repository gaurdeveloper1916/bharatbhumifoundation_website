export default function AboutUsContent() {
    const dummyData = [
      "John Doe is a 28-year-old software engineer working at TechCorp. He lives at 123 Elm Street, Springfield, IL, and enjoys hiking and reading sci-fi novels. In his free time, he contributes to open-source projects and is learning Python. You can contact him at john.doe@example.com.",
      "Jane Smith, aged 34, is a marketing manager at BrightIdeas Inc. She resides at 456 Maple Avenue, Boston, MA. Jane is passionate about creative advertising campaigns and often participates in industry conferences. Her hobbies include painting and yoga. Reach her at jane.smith@example.com.",
      "Mike Johnson, 45, is a project manager at BuildIt Ltd. He lives in Chicago, IL, at 789 Oak Drive. Mike has over 20 years of experience in construction project management. He loves golfing on weekends and spending time with his family. His email is mike.johnson@example.com.",
      "Emily Davis is a 22-year-old graphic designer who works freelance. She lives at 321 Pine Street, Seattle, WA. Emily specializes in creating digital illustrations for marketing materials. She also enjoys photography and nature walks. Contact her at emily.davis@example.com.",
      "Sarah Brown, 30, works as a data analyst for AnalyzeNow. She resides at 654 Cedar Lane, Denver, CO. Sarah is skilled in data visualization and predictive modeling. In her leisure time, she volunteers at a local animal shelter. Her email is sarah.brown@example.com.",
      "David Wilson, aged 40, is a senior software architect at CodeCraft. He lives at 987 Birch Road, Austin, TX. David has a deep interest in AI and machine learning and often speaks at tech meetups. He spends his weekends coding personal projects. Reach him at david.wilson@example.com.",
      "Laura Martinez, 26, is a content writer at WordSmith Agency. She lives in San Diego, CA, at 246 Palm Avenue. Laura loves storytelling and creating engaging online content. Her hobbies include surfing and exploring new cafes. Contact her at laura.martinez@example.com.",
      "Kevin Lee, 38, is an entrepreneur running a successful e-commerce business. He lives at 135 Elmwood Drive, New York, NY. Kevin enjoys mentoring budding entrepreneurs and attending startup events. He also has a passion for traveling. Email him at kevin.lee@example.com.",
      "Rachel Green, 29, is a fashion designer at StyleStudio. She resides at 468 Cherry Street, Los Angeles, CA. Rachel has an eye for trends and often collaborates with brands for seasonal collections. She enjoys sketching and visiting art museums. Contact her at rachel.green@example.com.",
      "James Parker, 50, is a retired teacher who now dedicates his time to gardening and community service. He lives at 753 Willow Way, Miami, FL. James loves teaching kids and organizes workshops on environmental conservation. His email is james.parker@example.com."
    ];
  
    return (
      <div className="mx-8 py-4">
        <h1 className="font-semibold py-4 text-2xl">Serving the elder cause for over four decades</h1>
        <ul className="space-y-2">
          {dummyData.map((item, index) => (
            <li
              key={index}
              className=" "
            >
              <div className="flex justify-center gap-4">
              <span className="mt-1">{`${index+1}.`}</span>
              <p className="text-lg text-gray-700">{item}</p>
              </div>
      
            </li>
          ))}
        </ul>
      </div>
    );
  }
  