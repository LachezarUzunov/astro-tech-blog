function formatDate(date: Date): string {
    const options = Intl.DateTimeFormatOptions = {year: 'numeric',
        month: 'long', day: 'numeric'};

    const formatedDate = new Date(date).toLocaleDateString(undefined, options);
    return formatedDate;
}

export { formatDate };