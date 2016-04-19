t = [
  'Derek',
  'Hunter',
  'Jaclyn',
  'Julian',
  'Mihai',
  'Sarah',
  'Seba',
  'Shambhavi',
  'Walker'
]

t.each do |instructor|
  Teacher.create(name: instructor)
end
