interface AbstractLogger{
  log(log:any)
}

interface Logger {
  readonly logger: AbstractLogger;
}

interface SearchLogger extends Logger{
  logSearch(data);
}

interface MovieLogger extends Logger{
  logDetailView(data);
}

export {
  AbstractLogger,
  Logger,
  MovieLogger,
  SearchLogger
}
