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

## Tools (1.5 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Follow [the good practices of the Git lesson](/lessons/git#good-practices)
- ❌ Have a [.clang-format](/lessons/formatting-tool/) file, and apply it to your codebase
- ☁️ Have a [.clang-tidy](/lessons/static-analysers/) file, and fix the problems it shows you, or ask the teacher if you don't understand what the warning means or don't know how to fix it.

➖ *What you **shouldn't** do:*

- 🌞 Committing unwanted files like your *build* folder (see [.gitignore](/lessons/git#gitignore))
- 🌞 Making no commits until near the end of the semester

## Clean Code (7.5 / 12 pts.)

➕ *What you **should** do:*

- 🌞 Write many small functions (<LessonLink slug="write-small-functions"/>)
- 🌞 Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- ❌ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- ❌ Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- 🌞 Hard to understand or misleading names (<LessonLink slug="naming"/>)
- 🌞 Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- 🌞 Overly complicated code
- 🌞 Global variables

## C++ Code Quality (2 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
- 🌞 Use destructors when things need to be destroyed at the end.
- ❌ Use `const` when appropriate (<LessonLink slug="const"/>)
- ☁️ Use lambdas when appropriate (<LessonLink slug="lambda"/>)

➖ *What you **shouldn't** do:*

- 🌞 Using `new` instead of a stack allocation or a smart pointer or a standard container (`std::vector`)
- 🌞 Forgetting `#pragma once` in your headers
- 🌞 Using `1` and `0` instead of `true` and `false` for your booleans

## Investment (2 / 4 pts.)

➕ *What you **should** do:*

- ☁️ Ask questions and participate in class
- ☁️ Take my feedback into account, improve your old code if need be
- ☁️ Extend your project with additional features

```cpp
public:
    Boid(int sizeBoid);

    void      display(glm::mat4 &ModelMatrix, glm::mat4 &ViewMatrix, glm::mat4 &ProjMatrix,
                      GLint uMVPMatrix, GLint uMVMatrix, GLint uNormalMatrix, Model3D &model) const;
    void      updatePosition();
    vec       getPosition() const;
    glm::vec3 getColor() const;
    vec       getDirection() const;
    vec       calculateSeparationForce(const std::vector<Boid>& boids, float separation);
    vec       calculateCohesionForce(const std::vector<Boid>& boids, float cohesion);
    vec       calculateAlignmentForce(const std::vector<Boid>& boids, float alignment);
    void      applySteeringForces(const std::vector<Boid>& boids, float separation, float cohesion, float alignment);
```
La plupart de ces fonctions auraient ppu être privées

```cpp
void ListeBoids::display(glm::mat4 &ModelMatrix, glm::mat4 &ViewMatrix, glm::mat4 &ProjMatrix,
                         const GLint uMVPMatrix, const GLint uMVMatrix, const GLint uNormalMatrix, Model3D &model) const
{
    for (const Boid& b : listeBoids)
    {
        b.display(ModelMatrix, ViewMatrix, ProjMatrix, uMVPMatrix, uMVMatrix, uNormalMatrix, model);
    }
}
```
Vous auriez pu faire une struct pour grouper tous ces paramètres pour éviter de les dupliquer entre ListeBoids::display() et Boid::display().

```cpp
void Model3D::drawObject(glm::mat4 &ViewMatrix, glm::mat4 &ModelMatrix, glm::mat4 &ProjMatrix,
```
Passez par const& quand vous n'avez pas besoin de modifier l'objet