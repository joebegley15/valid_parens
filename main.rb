def valid_parentheses(string)
    array = string.split("")
    counter = 0
    array.each {|x|
        if x == "("
            counter += 1
        elsif x == ")"
            counter -= 1
        end
        if counter < 0
            return false
        end
    }
    if counter == 0
        return true
    else
        return false
    end
end