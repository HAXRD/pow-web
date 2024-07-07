import {format, parse} from 'date-fns';

export const getTextColor = (hex: string) => {
    // parse RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // calculate luminance
    let luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 128 ? '#000000' : '#FFFFFF';
}

export const convertToColor = (hex: string) => {
    return '#' + hex.substring(0, 6)
}

export const formatTimestamp = (timestamp: string) => {
    // Extract the part of the string that represents the date and time
    const dateTimeString = timestamp.split(' ')[0] + ' ' + timestamp.split(' ')[1];

    // Define the format of the input string
    const inputFormat = 'yyyy-MM-dd HH:mm:ss.SSSSSS';

    // Parse the date string using the input format
    const parsedDate = parse(dateTimeString, inputFormat, new Date());

    // Format the parsed date into the desired output format with millisecond precision
    const outputFormat = 'yyyy-MM-dd HH:mm:ss.SSS';
    return format(parsedDate, outputFormat);
}