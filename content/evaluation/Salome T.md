import StudentsDropdown from "@site/components/evaluation/StudentsDropdown"
import LessonLink from "@site/components/LessonLink"

<StudentsDropdown/>

<br/>

# Evaluation

:::tip CAPTIONS
☁️ > I haven't seen enough of your code yet to tell if you are doing well.<br/>
🌞 > You are doing great.<br/>
🌈 > You are doing amazing.<br/>
❌ > I am not happy and you should prioritize working on that point.
:::

## Tools (3 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Follow [the good practices of the Git lesson](/lessons/git#good-practices)
- 🌞 Have a [.clang-format](/lessons/formatting-tool/) file, and apply it to your codebase
- 🌞 Have a [.clang-tidy](/lessons/static-analysers/) file, and fix the problems it shows you, or ask the teacher if you don't understand what the warning means or don't know how to fix it.

➖ *What you **shouldn't** do:*

- 🌞 Committing unwanted files like your *build* folder (see [.gitignore](/lessons/git#gitignore))
- 🌞 Making no commits until near the end of the semester

## Clean Code (7.5 / 12 pts.)

➕ *What you **should** do:*

- 🌞 Write many small functions (<LessonLink slug="write-small-functions"/>)
- 🌞 Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- 🌞 Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- ☁️ Hard to understand or misleading names (<LessonLink slug="naming"/>)
- ❌ Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- 🌞 Overly complicated code
- 🌞 Global variables

## C++ Code Quality (2 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
- ❌ Use destructors when things need to be destroyed at the end.
- ☁️ Use `const` when appropriate (<LessonLink slug="const"/>)
- ☁️ Use lambdas when appropriate (<LessonLink slug="lambda"/>)

➖ *What you **shouldn't** do:*

- 🌞 Using `new` instead of a stack allocation or a smart pointer or a standard container (`std::vector`)
- 🌞 Forgetting `#pragma once` in your headers
- 🌞 Using `1` and `0` instead of `true` and `false` for your booleans

## Investment (3 / 4 pts.)

➕ *What you **should** do:*

- ☁️ Ask questions and participate in class
- 🌞 Take my feedback into account, improve your old code if need be
- ☁️ Extend your project with additional features

```cpp
int state; // State of the boid (0 = normal, 1 = blue, 2 = green, 3 = red and predator)
```
Vous pouvez utiliser un enum pour ça :
```cpp
enum class BoidState{
    Normal,
    Blue,
    Green,
    RedPredator,
};

BoidState state;
```

```cpp
Model alg = Model();
alg.loadModel("alg.obj");
```
Faites plutôt le load_model() directement dans le constructeur de Model ça sera plus simple.

```cpp
    GLuint bakeSkybox = 0;
    glGenTextures(1, &bakeSkybox);
    glBindTexture(GL_TEXTURE_2D, bakeSkybox);

    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, img_water.width(), img_water.height(), 0, GL_RGBA, GL_UNSIGNED_BYTE, img_water.data());
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
    glBindTexture(GL_TEXTURE_2D, 0);

    GLuint bakeAlg = 0;
    glGenTextures(1, &bakeAlg);
    glBindTexture(GL_TEXTURE_2D, bakeAlg);

    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, img_alg.width(), img_alg.height(), 0, GL_RGBA, GL_UNSIGNED_BYTE, img_alg.data());
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
    glBindTexture(GL_TEXTURE_2D, 0);
```
Vous auriez pu faire une fonction qui load une texture plutôt que de dupliquer le code à chaque fois.

```cpp
    kw.~Model();
    skybox.~Model();
    turtle.~Model();
    alg.~Model();
    chest.~Model();
    floatie.~Model();
```
Pas besoin d'appeler manuellement le destructeur, c'est fait automatiquement !! C'est tout l'intérêt d'un destructeur. Ne rien écrire aurait fait exactement la même chose.