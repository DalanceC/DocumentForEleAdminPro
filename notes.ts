import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

const demoNote = defineNoteConfig({
  dir: "demo",
  link: "/demo",
  sidebar: ["", "foo", "bar"],
});

const eleAdminPro = defineNoteConfig({
  dir: "EleAdminPro",
  link: "/EleAdminPro",
  sidebar: [
    {
      text: "EleAdminPro 开发文档",
      items: [
        "one",
        "two",
        "three",
        "four",
        "five",
        {
          text: "扩展组件",
          collapsed: true,
          items: [
            "six_one",
            "six_two",
            "six_three",
            "six_four",
            "six_five",
            "six_six",
            "six_seven",
            "six_eight",
            "six_nine",
            "six_ten",
            "six_eleven",
            "six_twelve",
            "six_thirteen",
            "six_fourteen",
            "six_fifteen",
            "six_sixteen",
            "six_seventeen",
            "six_eighteen",
            "six_nineteen",
            "six_twenty",
            "six_twenty-one",
            "six_twenty-two",
            "six_twenty-three",
            "six_twenty-four",
            "six_twenty-five",
            "six_twenty-six",
            "six_twenty-seven",
          ],
        },
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
      ],
    },
  ],
});

export const notes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [demoNote, eleAdminPro],
});
