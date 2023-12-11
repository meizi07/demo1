export function getSequence(sequence: string): string {
  const sequenceAsNumber = parseInt(sequence, 10);
  const incrementedSequence = (sequenceAsNumber + 1).toString();

  return incrementedSequence;
}

export function getGenderLabel(gender: string): string {
  switch (gender) {
    case "0":
      return "男";
    case "1":
      return "女";
    case "2":
      return "多元性別";
    default:
      return "未知";
  }
}

export function getAgeLabel(age: string): string {
  switch (age) {
    case "0":
      return "0-10";
    case "1":
      return "11-20";
    case "2":
      return "21-30";
    case "3":
      return "31-40";
    case "4":
      return "41-50";
    case "5":
      return "51-60";
    case "6":
      return "61-70";
    case "7":
      return "71-80";
    case "8":
      return "81-90";
    case "9":
      return "91-100";
    case "10":
      return "100以上";
    default:
      return "未知";
  }
}

export function getSpecialDemandLabel(specialDemand: string): string {
  switch (specialDemand) {
    case "0":
      return "行動不便";
    case "1":
      return "寵物";
    case "2":
      return "無障礙";
    case "3":
      return "其他";
    default:
      return "未知";
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${year}-${month}-${day}`;
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
