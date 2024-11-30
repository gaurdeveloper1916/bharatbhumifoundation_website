import Image from "next/image";
import React from "react";
import BlogCard2 from "./blog_card2";
import Button from "../../button";

export default function UrgentCausesSection() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center w-full h-auto py-14 gap-4 bg-orange-50">
      <div className="flex flex-col justify-start items-start max-w-sm gap-6 p-4 pl-6">
        <h4 className="text-3xl font-bold text-red-600 capitalize">
          Our Missions
        </h4>
        <h2 className="flex flex-row flex-wrap justify-start items-start text-3xl font-bold text-black capitalize">
          Helping more than&nbsp;
          <span className="relative text-inherit">
            6K Children
            <Image
              src={"/img/word_marker.png"}
              alt="word_marker image"
              width={32 * 16}
              height={32 * 9}
              className="w-full h-8 absolute -bottom-5 left-0"
            />
          </span>
          &nbsp;Every Year
        </h2>
        <p className="text-sm text-gray-500 w-10/12">
          Our mission is to empower communities through sustainable development and support. We strive to create impactful change by providing education, resources, and opportunities to those in need. With compassion at our core, we aim to uplift lives and promote social equality. Together, we envision a better future for all
        </p>
        
      </div>
      <BlogCard2
        src={"/img/medicating_poor_child.jpg"}
        title={"Promoting education, health, and equality."}
        description={
          "This mission focuses on improving key areas—education, healthcare, and social equality. It suggests the organization’s aim to create opportunities for learning"
        }
        raised_value={58012}
        goal_value={65000}
        button_color={"green-600"}
        read_more_link={"#empower_and_inspire"}
      />
      <BlogCard2
        src={"/img/happy_boy1.jpg"}
        title={"Empowering individuals, transforming communities sustainably."}
        description={
          " The focus here is on giving individuals the tools and opportunities to improve their own lives. "
        }
        raised_value={27984}
        goal_value={35000}
        button_color={"blue-600"}
        read_more_link={"#a_ray_of_hope"}
      />
       <BlogCard2
        src={"/img/happy_boy1.jpg"}
        title={"Empowering individuals, transforming communities sustainably."}
        description={
          " The focus here is on giving individuals the tools and opportunities to improve their own lives. "
        }
        raised_value={27984}
        goal_value={35000}
        button_color={"blue-600"}
        read_more_link={"#a_ray_of_hope"}
      />
                 <BlogCard2
        src={"/img/happy_boy1.jpg"}
        title={"Empowering individuals, transforming communities sustainably."}
        description={
          " The focus here is on giving individuals the tools and opportunities to improve their own lives. "
        }
        raised_value={27984}
        goal_value={35000}
        button_color={"blue-600"}
        read_more_link={"#a_ray_of_hope"}
      />
       <BlogCard2
        src={"/img/happy_boy1.jpg"}
        title={"Empowering individuals, transforming communities sustainably."}
        description={
          " The focus here is on giving individuals the tools and opportunities to improve their own lives. "
        }
        raised_value={27984}
        goal_value={35000}
        button_color={"blue-600"}
        read_more_link={"#a_ray_of_hope"}
      />
    </div>
  );
}