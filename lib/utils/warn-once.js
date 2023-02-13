let hasWarned = {};
export default function warnOnce(message) {
  if (!hasWarned[message]) {
    console.warn(message);
    hasWarned[message] = true;
  }
}