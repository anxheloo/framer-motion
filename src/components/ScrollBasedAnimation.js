import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

//Building a progress bar while we scroll
const ScrollBasedAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  //Updating background color in real time using useTransform
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86,1,245)", "rgb(1,245,13)"]
  );

  return (
    <div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left",
          //   background: "blue",
          background: background,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      ></motion.div>

      <div style={{ padding: "1.2rem", margin: "auto", maxWidth: "700px" }}>
        <p>
          Deserunt ex dolor elit pariatur cupidatat laborum velit. Irure sint id
          eu dolore Lorem sunt. Eu commodo deserunt tempor nulla aliqua.
          Deserunt magna Lorem magna eu. Laboris nostrud adipisicing anim ea qui
          eu esse eu velit anim. Sunt consectetur est ad enim laborum. Aute
          culpa incididunt elit elit. Velit magna non ad exercitation laboris
          proident commodo ea proident duis voluptate in do. Aute nostrud
          cupidatat duis anim amet. Ea nisi laboris sunt non occaecat dolore
          voluptate amet. Sint do qui incididunt sit cupidatat consequat ex id
        </p>

        <p>
          sunt duis deserunt incididunt. Sunt consequat ex tempor dolore culpa
          eu excepteur commodo duis commodo. In incididunt est deserunt
          cupidatat. Elit ea labore officia nostrud do aliqua ad. Velit aliquip
          irure dolor nisi. Esse pariatur esse ipsum voluptate nisi labore
          aliqua. Aliqua magna quis ex fugiat incididunt ex qui esse cupidatat
          exercitation laboris. Aliquip aliqua enim do et aliqua nostrud esse
          cillum non officia ex excepteur laboris cupidatat. Aute nostrud
        </p>

        <p>
          non. Nisi minim amet do ad amet aliquip consequat aliquip velit fugiat
          reprehenderit occaecat mollit esse. Pariatur adipisicing eu
          reprehenderit quis excepteur nulla et minim laboris cillum laborum id.
          Consectetur exercitation commodo quis excepteur non eu ipsum aliqua
          sunt. Commodo cillum aliqua excepteur voluptate laborum occaecat irure
          in aute nulla Lorem. Aute ut et id occaecat aute laboris proident
          aliqua commodo non mollit. Nulla exercitation exercitation anim cillum
        </p>

        <p>
          voluptate minim quis incididunt cillum cupidatat do tempor dolor
          tempor pariatur fugiat dolore. Officia in labore mollit est cupidatat
          esse nisi proident officia officia culpa. Officia amet incididunt
          fugiat quis adipisicing magna excepteur in commodo irure sit eiusmod
          dolore deserunt. Dolor laborum incididunt ad sunt dolore elit aliquip
          tempor id non tempor dolore et.
        </p>

        <p>
          Deserunt ex dolor elit pariatur cupidatat laborum velit. Irure sint id
          eu dolore Lorem sunt. Eu commodo deserunt tempor nulla aliqua.
          Deserunt magna Lorem magna eu. Laboris nostrud adipisicing anim ea qui
          eu esse eu velit anim. Sunt consectetur est ad enim laborum. Aute
          culpa incididunt elit elit. Velit magna non ad exercitation laboris
          proident commodo ea proident duis voluptate in do. Aute nostrud
          cupidatat duis anim amet. Ea nisi laboris sunt non occaecat dolore
          voluptate amet. Sint do qui incididunt sit cupidatat consequat ex id
        </p>

        <p>
          sunt duis deserunt incididunt. Sunt consequat ex tempor dolore culpa
          eu excepteur commodo duis commodo. In incididunt est deserunt
          cupidatat. Elit ea labore officia nostrud do aliqua ad. Velit aliquip
          irure dolor nisi. Esse pariatur esse ipsum voluptate nisi labore
          aliqua. Aliqua magna quis ex fugiat incididunt ex qui esse cupidatat
          exercitation laboris. Aliquip aliqua enim do et aliqua nostrud esse
          cillum non officia ex excepteur laboris cupidatat. Aute nostrud
        </p>

        <p>
          non. Nisi minim amet do ad amet aliquip consequat aliquip velit fugiat
          reprehenderit occaecat mollit esse. Pariatur adipisicing eu
          reprehenderit quis excepteur nulla et minim laboris cillum laborum id.
          Consectetur exercitation commodo quis excepteur non eu ipsum aliqua
          sunt. Commodo cillum aliqua excepteur voluptate laborum occaecat irure
          in aute nulla Lorem. Aute ut et id occaecat aute laboris proident
          aliqua commodo non mollit. Nulla exercitation exercitation anim cillum
        </p>

        <p>
          voluptate minim quis incididunt cillum cupidatat do tempor dolor
          tempor pariatur fugiat dolore. Officia in labore mollit est cupidatat
          esse nisi proident officia officia culpa. Officia amet incididunt
          fugiat quis adipisicing magna excepteur in commodo irure sit eiusmod
          dolore deserunt. Dolor laborum incididunt ad sunt dolore elit aliquip
          tempor id non tempor dolore et.
        </p>

        <p>
          Deserunt ex dolor elit pariatur cupidatat laborum velit. Irure sint id
          eu dolore Lorem sunt. Eu commodo deserunt tempor nulla aliqua.
          Deserunt magna Lorem magna eu. Laboris nostrud adipisicing anim ea qui
          eu esse eu velit anim. Sunt consectetur est ad enim laborum. Aute
          culpa incididunt elit elit. Velit magna non ad exercitation laboris
          proident commodo ea proident duis voluptate in do. Aute nostrud
          cupidatat duis anim amet. Ea nisi laboris sunt non occaecat dolore
          voluptate amet. Sint do qui incididunt sit cupidatat consequat ex id
        </p>

        <p>
          sunt duis deserunt incididunt. Sunt consequat ex tempor dolore culpa
          eu excepteur commodo duis commodo. In incididunt est deserunt
          cupidatat. Elit ea labore officia nostrud do aliqua ad. Velit aliquip
          irure dolor nisi. Esse pariatur esse ipsum voluptate nisi labore
          aliqua. Aliqua magna quis ex fugiat incididunt ex qui esse cupidatat
          exercitation laboris. Aliquip aliqua enim do et aliqua nostrud esse
          cillum non officia ex excepteur laboris cupidatat. Aute nostrud
        </p>

        <p>
          non. Nisi minim amet do ad amet aliquip consequat aliquip velit fugiat
          reprehenderit occaecat mollit esse. Pariatur adipisicing eu
          reprehenderit quis excepteur nulla et minim laboris cillum laborum id.
          Consectetur exercitation commodo quis excepteur non eu ipsum aliqua
          sunt. Commodo cillum aliqua excepteur voluptate laborum occaecat irure
          in aute nulla Lorem. Aute ut et id occaecat aute laboris proident
          aliqua commodo non mollit. Nulla exercitation exercitation anim cillum
        </p>

        <p>
          voluptate minim quis incididunt cillum cupidatat do tempor dolor
          tempor pariatur fugiat dolore. Officia in labore mollit est cupidatat
          esse nisi proident officia officia culpa. Officia amet incididunt
          fugiat quis adipisicing magna excepteur in commodo irure sit eiusmod
          dolore deserunt. Dolor laborum incididunt ad sunt dolore elit aliquip
          tempor id non tempor dolore et.
        </p>

        <p>
          Deserunt ex dolor elit pariatur cupidatat laborum velit. Irure sint id
          eu dolore Lorem sunt. Eu commodo deserunt tempor nulla aliqua.
          Deserunt magna Lorem magna eu. Laboris nostrud adipisicing anim ea qui
          eu esse eu velit anim. Sunt consectetur est ad enim laborum. Aute
          culpa incididunt elit elit. Velit magna non ad exercitation laboris
          proident commodo ea proident duis voluptate in do. Aute nostrud
          cupidatat duis anim amet. Ea nisi laboris sunt non occaecat dolore
          voluptate amet. Sint do qui incididunt sit cupidatat consequat ex id
        </p>

        <p>
          sunt duis deserunt incididunt. Sunt consequat ex tempor dolore culpa
          eu excepteur commodo duis commodo. In incididunt est deserunt
          cupidatat. Elit ea labore officia nostrud do aliqua ad. Velit aliquip
          irure dolor nisi. Esse pariatur esse ipsum voluptate nisi labore
          aliqua. Aliqua magna quis ex fugiat incididunt ex qui esse cupidatat
          exercitation laboris. Aliquip aliqua enim do et aliqua nostrud esse
          cillum non officia ex excepteur laboris cupidatat. Aute nostrud
        </p>

        <p>
          non. Nisi minim amet do ad amet aliquip consequat aliquip velit fugiat
          reprehenderit occaecat mollit esse. Pariatur adipisicing eu
          reprehenderit quis excepteur nulla et minim laboris cillum laborum id.
          Consectetur exercitation commodo quis excepteur non eu ipsum aliqua
          sunt. Commodo cillum aliqua excepteur voluptate laborum occaecat irure
          in aute nulla Lorem. Aute ut et id occaecat aute laboris proident
          aliqua commodo non mollit. Nulla exercitation exercitation anim cillum
        </p>

        <p>
          voluptate minim quis incididunt cillum cupidatat do tempor dolor
          tempor pariatur fugiat dolore. Officia in labore mollit est cupidatat
          esse nisi proident officia officia culpa. Officia amet incididunt
          fugiat quis adipisicing magna excepteur in commodo irure sit eiusmod
          dolore deserunt. Dolor laborum incididunt ad sunt dolore elit aliquip
          tempor id non tempor dolore et.
        </p>
      </div>
    </div>
  );
};

export default ScrollBasedAnimation;
