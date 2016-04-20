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
  t = Teacher.create(name: instructor)
  rand(4).times do |i|
    Badge.create(description: "Placeholder Desc.", vote_count: rand(30), teacher_id: t.id)
  end
end

