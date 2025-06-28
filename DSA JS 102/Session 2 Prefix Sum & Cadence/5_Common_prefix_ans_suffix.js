function findCommonPrefixAndSuffix(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;

    let len = Math.min(len1, len2);

    for (let i = len; i > 0; i--) {
        let prefix = str1.substring(0, i);
        let suffix = str2.substring(len2 - i);

        if (prefix === suffix) {
            return prefix;
        }
    }

    return "";
}