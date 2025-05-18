---
layout: post
title: Create your own Groovy type conversion
description: Type conversion is a programming language technique for changing an object's data type into another.
tags: programming
---

### Type conversion, the standard way

_Type conversion_—or _casting_—is a programming language technique for changing an
object's data type into another.

The following code converts a String to an Integer.

```groovy
def number = (Integer)'1'
def number = '1'.toInteger()
def number = '1' as Integer
```

If we want to change the type of our own objects, we need to create a method to
achieve this goal. We can copy object properties to another object in a generic way;
if a property exists on the target object, we can copy it from the source object.

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

Now, it is possible to do something like this:

```groovy
adminUser = user.toAdminUser()
```


### Type conversion, the fancy way

This is great, but we may want to use this fancy way to coerce one type into another:

```groovy
adminUser = user as AdminUser
```

It's simple because [Groovy supports operator overloading][1]{:target="_blank" rel="noreferrer"}
and, therefore, creating your own type conversion is really easy—we can override the
[asType() method][2]{:target="_blank" rel="noreferrer"}.

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


[1]: http://groovy-lang.org/operators.html#Operator-Overloading
[2]: http://docs.groovy-lang.org/latest/html/groovy-jdk/java/lang/Object.html#asType(java.lang.Class)
