-- Insert sample Profiles
INSERT INTO
  profiles (
    id,
    user_name,
    first_name,
    last_name,
    bio,
    avatar,
    phone,
    role,
    created_at,
    updated_at
  )
VALUES
  (
    '550e8400-e29b-41d4-a716-446655440000',
    'johndoe',
    'John',
    'Doe',
    'Lorem ipsum bio for John Doe.',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    '1234567890',
    'USER',
    NOW (),
    NOW ()
  ),
  (
    '550e8400-e29b-41d4-a716-446655440001',
    'janedoe',
    'Jane',
    'Doe',
    'Lorem ipsum bio for Jane Doe.',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    '0987654321',
    'ADMIN',
    NOW (),
    NOW ()
  ),
  (
    '550e8400-e29b-41d4-a716-446655440002',
    'alexsmith',
    'Alex',
    'Smith',
    'Bio of Alex Smith.',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    '1112223333',
    'USER',
    NOW (),
    NOW ()
  ),
  (
    '550e8400-e29b-41d4-a716-446655440003',
    'emilyjones',
    'Emily',
    'Jones',
    'Bio of Emily Jones.',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    '4445556666',
    'USER',
    NOW (),
    NOW ()
  ),
  (
    '550e8400-e29b-41d4-a716-446655440004',
    'michaelbrown',
    'Michael',
    'Brown',
    'Bio of Michael Brown.',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    '7778889999',
    'USER',
    NOW (),
    NOW ()
  );
