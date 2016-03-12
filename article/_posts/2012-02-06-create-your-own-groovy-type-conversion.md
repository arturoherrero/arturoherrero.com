---
layout: post
title: Create your own Groovy type conversion
redirect_from: /2012/02/06/create-your-own-groovy-type-conversion/
---

### Type conversion, the standard way

Type conversion or casting is a programming language technique for changing an
object's data type into another.

I'm sure you are familiar with this code that converts a String to an Integer.

```groovy
def number = (Integer)'1'
def number = '1'.toInteger()
def number = '1' as Integer
```

If I want to convert the type of my own objects, I need to create a method to
achieve this goal. I copy object properties to another object in a generic way;
if a property exists on target object, I copy it from the source object.

```groovy
class User {
    String name
    String city
    Integer age

    def toAdminUser() {
        def adminUser = new AdminUser()
        copyProperties(this, adminUser)
        return adminUser
    }

    def copyProperties(source, target) {
        source.properties.each { key, value ->
            if (target.hasProperty(key) && !(key in ['class', 'metaClass'])) {
                target[key] = value
            }
        }
    }
}

class AdminUser {
    String name
    String city
    Integer age
}
```

Now I can do something like this:

```groovy
adminUser = user.toAdminUser()
```


### Type conversion, the fancy way

Great, but I want to use this fancy way to coerce one type to another:

```groovy
adminUser = user as AdminUser
```

Simple, [Groovy supports operator overloading][1]{:target="_blank"} and
creating your own type conversion is really easy: we can override the
[asType() method][2]{:target="_blank"}.

```groovy
class User {
    String name
    String city
    Integer age

    Object asType(Class clazz) {
        if (clazz == AdminUser) {
            def adminUser = new AdminUser()
            copyProperties(this, adminUser)
            return adminUser
        }
        else {
            super.asType(clazz)
        }
    }

    def copyProperties(source, target) {
        source.properties.each { key, value ->
            if (target.hasProperty(key) && !(key in ['class', 'metaClass'])) {
                target[key] = value
            }
        }
    }
}
```


[1]: http://groovy.codehaus.org/Operator+Overloading
[2]: http://groovy.codehaus.org/groovy-jdk/java/lang/Object.html#asType%28java.lang.Class%29
